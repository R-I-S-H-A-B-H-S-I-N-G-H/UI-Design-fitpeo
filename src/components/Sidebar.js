import "./sidebar.css";
function Sidebar() {
  return (
    <div className="sidebarArea">
      <header>
        <div className="admin">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"></img>
          <div>
            <h3>Minimal UI</h3>
            <h4>admin</h4>
          </div>
        </div>
      </header>

      <div className="general">
        <h3 className="cat_title">General</h3>
        <div className="selectable">App</div>
        <div className="selectable">E-Commerce</div>
        <div className="selectable">Analytics</div>
        <div className="selectable">Banking</div>
        <div className="selectable">Booking</div>
      </div>
      <div className="management">
        <h3 className="cat_title">Management</h3>
        <div className="selectable">Users</div>
        <div className="selectable">E-Commerce</div>
        <div className="selectable">Blog</div>
      </div>
      <div className="apps">
        <h3 className="cat_title">Apps</h3>
        <div className="selectable">Mails</div>
      </div>
    </div>
  );
}
export default Sidebar;
