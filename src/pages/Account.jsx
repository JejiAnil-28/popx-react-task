import { useLocation } from "react-router-dom";

function Account() {
  const location = useLocation();

  // Get data from navigation OR localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const user = location.state || storedUser;

  return (
    <div className="account">

      <div className="account-header">
        <h3>Account Settings</h3>
      </div>

      <div className="account-card">

        <div className="profile">

          <div className="profile-img">
            <img
              src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
              alt="profile"
            />
            <div className="camera-icon">📷</div>
          </div>

          <div className="profile-info">
            <h4>{user?.name || "Marry Doe"}</h4>
            <p>{user?.email || "marrydoe@gmail.com"}</p>
          </div>

        </div>

        <p className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>

      </div>

    </div>
  );
}

export default Account;