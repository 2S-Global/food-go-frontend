"use client";

import React, { useState, useEffect } from "react";
import Loader from "@/app/components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuthStore from "@/app/store/useAuthStore";




export default function AccountSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [profilePreview, setProfilePreview] = useState("");
  const [isHover, setIsHover] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
const { updateUser } = useAuthStore();



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    country: "",
    state: "",
    city: "",
    address: "",
    profileImage: null,
  });

  const [initialData, setInitialData] = useState(null);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("auth_token") : null;

  /* =========================
     FETCH USER DETAILS
  ========================= */
  const fetchUserDetails = async () => {
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/userdata/user-details`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await res.json();

      if (data.success) {
        const fetched = {
          name: data.data.name || "",
          email: data.data.email || "",
          phone_number: data.data.phone_number || "",
          country: data.data.country || "",
          state: data.data.state || "",
          city: data.data.city || "",
          address: data.data.address || "",
        };

        setFormData({ ...fetched, profileImage: null });
        setInitialData(fetched);

        setProfilePreview(
          data.data.profilePicture
            ? `${data.data.profilePicture}?t=${Date.now()}`
            : "/assets/images/default-user.jpg"
        );

        // Update localStorage so header shows latest info on page load
        localStorage.setItem(
          "auth_user",
          JSON.stringify({
            ...data.data,
            name: data.data.name,
            profilePicture: data.data.profilePicture,
          })
        );
        window.dispatchEvent(new Event("authChange"));
      } else {
        toast.error(data.message || "Failed to load profile");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch profile");
    } finally {
      setLoading(false);
    }
  };

  

  useEffect(() => {
    fetchUserDetails();
  }, [token]);

  /* =========================
     INPUT HANDLERS
  ========================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((p) => ({ ...p, profileImage: file }));
      setProfilePreview(URL.createObjectURL(file));
    }
  };

  /* =========================
     CHANGE DETECTION
  ========================= */
  const hasProfileChanges = () => {
    if (!initialData) return false;
    for (const key in initialData) {
      if (formData[key] !== initialData[key]) return true;
    }
    return !!formData.profileImage;
  };

  /* =========================
     UPLOAD PROFILE IMAGE API
  ========================= */
  const uploadProfileImage = async () => {
    const imgData = new FormData();
    imgData.append("profileImage", formData.profileImage);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/userdata/upload-user-profile`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: imgData,
      }
    );

    const data = await res.json();
    if (!data.success) {
      throw new Error(data.message || "Image upload failed");
    }
  };

  /* =========================
     UPDATE PROFILE
  ========================= */
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("User not logged in");
      return;
    }

    if (!hasProfileChanges()) {
      toast.info("No changes detected");
      return;
    }

    const imageChanged = !!formData.profileImage;
    const profileChanged = Object.keys(initialData).some(
      (key) => formData[key] !== initialData[key]
    );

    try {
      setIsSaving(true);

      // Upload image first
      if (imageChanged) {
        await uploadProfileImage();
      }

      // Update profile details if changed
      if (profileChanged) {
        const fd = new FormData();
        fd.append("name", formData.name);
        fd.append("country", formData.country);
        fd.append("state", formData.state);
        fd.append("city", formData.city);
        fd.append("address", formData.address);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/userdata/update-user-details`,
          {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: fd,
          }
        );

        const data = await res.json();
        if (!data.success) {
          throw new Error(data.message || "Profile update failed");
        }
      }

      toast.success("Profile updated successfully");

      // Update localStorage so header auto-refreshes
const storedUser = localStorage.getItem("auth_user");
if (storedUser) {
  const parsedUser = JSON.parse(storedUser);

  const updatedUser = {
    ...parsedUser,
    name: formData.name,
    profilePicture: profilePreview,
  };

  // ✅ persist
  localStorage.setItem("auth_user", JSON.stringify(updatedUser));

  // ✅ update zustand (THIS FIXES HEADER IMAGE)
  updateUser({
    name: formData.name,
    profilePicture: profilePreview,
  });

  // optional (can stay)
  window.dispatchEvent(new Event("authChange"));
}



      // Refresh profile image + data
      await fetchUserDetails();
      setFormData((p) => ({ ...p, profileImage: null }));
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Something went wrong");
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <>
      <ToastContainer position="top-right" />

      <div className="tabs-wrp account-settings brd-rd5">
        <h4>ACCOUNT SETTINGS</h4>

        <div className="account-settings-inner">
          <div className="row">
            {/* PROFILE IMAGE */}
            <div className="col-md-4">
              <div className="profile-info text-center">
                <div className="profile-thumb brd-rd50">
                  <img src={profilePreview} alt="profile" />
                </div>

                <div className="profile-img-upload-btn">
                  <label className="fileContainer brd-rd5 yellow-bg">
                    UPLOAD PICTURE
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="col-md-8">
              <form className="profile-info-form" onSubmit={handleUpdate}>
                <div className="row mrg20">
                  <div className="col-md-12">
                    <label>Name</label>
                    <input
                      className="brd-rd3"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-12">
                    <label>Email</label>
                    <input
                      className="brd-rd3"
                      value={formData.email}
                      readOnly
                    />
                  </div>

                  <div className="col-md-12">
                    <label>Phone</label>
                    <input
                      className="brd-rd3"
                      value={formData.phone_number}
                      readOnly
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Country</label>
                    <input
                      className="brd-rd3"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>State</label>
                    <input
                      className="brd-rd3"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mt-2">
                    <label>City</label>
                    <input
                      className="brd-rd3"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-12 mt-2">
                    <label>Address</label>
                    <input
                      className="brd-rd3"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-12 mt-3">
                    <button
                      type="submit"
                      onMouseEnter={() => setIsHover(true)}
                      onMouseLeave={() => setIsHover(false)}
                      style={{
                        padding: "14px 24px",
                        backgroundColor:
                          isSaving || isHover ? "#c8102e" : "#ffbe00",
                        color: isSaving || isHover ? "#fff" : "#000",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "13px",
                        fontWeight: "600",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      {isSaving && <span className="btn-spinner" />}
                      {isSaving ? "UPDATING..." : "UPDATE PROFILE"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
