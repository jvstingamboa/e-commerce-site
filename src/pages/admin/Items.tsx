import { Link } from "@tanstack/react-router";

export function Items() {
  return (
    <div className="px-8">
      <Link to="/admin">Back to Admin</Link>
      <p>
        I'm the items page! In this page, allow me to manage all the items that
        can be displayed on the shop!
      </p>
    </div>
  );
}
