import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <div className="bg-slate-800 min-h-screen">
        <div className="flex flex-col items-center justify-center pt-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}
