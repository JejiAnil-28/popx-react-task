function Account() {
  return (
    <div className="account">

      {/* Header */}
      <div className="account-header">
        <h3>Account Settings</h3>
      </div>

      {/* Card */}
      <div className="account-card">

        {/* Profile Section */}
        <div className="profile">

          <div className="profile-img">
            <img
              src="https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZwOF6NfOR0zhYC44xOX06ryIPAUhDvAajrPsaZ6v1-w="
              alt="profile"
            />
            <div className="camera-icon">📷</div>
          </div>

          <div className="profile-info">
            <h4>Marry Doe</h4>
            <p>MarryDoe@gmail.com</p>
          </div>

        </div>

        {/* Description */}
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