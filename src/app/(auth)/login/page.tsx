
import Image from "next/image";
export default function LoginPage() {
  return (
    <div className="overflow-hidden bg-gray-50">
      <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
          <form action="#" className="p-7 sm:p-11" method="POST">
            <div className="flex items-start">
              <a title="Home" href="/">
                <Image
                  src="/logo.webp"
                  alt="Umbrella ERP Logo"
                  width={120}
                  height={40}
                  className="h-auto w-auto"
                />
              </a>
            </div>

            <h1 className="mt-8 text-base/6 font-medium">Welcome back!</h1>
            <p className="mt-1 text-sm/5 text-gray-600">
              Sign in to your account to continue.
            </p>

            <div className="mt-8 space-y-3">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>

              <input
                required
                type="email"
                id="email"
                name="email"
                className="
                  block w-full rounded-lg border border-transparent 
                  shadow-sm ring-1 ring-black/10 
                  px-2 py-1.5 
                  text-base sm:text-sm
                  focus:outline-none focus:ring-2 focus:ring-black
                "
              />
            </div>

            <div className="mt-8 space-y-3">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>

              <input
                required
                type="password"
                id="password"
                name="password"
                className="
                  block w-full rounded-lg
                  border border-transparent
                  shadow-sm
                  ring-1 ring-black/10
                  px-3 py-2
                  text-sm
                  focus:outline-none
                  focus:ring-2 focus:ring-black
                "
              />
            </div>

            <div className="mt-8 flex items-center justify-between text-sm/5">
              <div className="flex items-center gap-3">
                <input type="checkbox" id="remember" className="peer sr-only" />

                <span
                  className="
                    relative flex items-center justify-center
                    h-4 w-4 rounded-sm border border-gray-300 shadow-sm
                    ring-1 ring-black/10
                    peer-checked:bg-black peer-checked:ring-black
                    peer-focus:outline-2 peer-focus:outline-offset-2 peer-focus:outline-black
                    transition
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="
                      absolute h-3 w-3 text-white opacity-0
                      peer-checked:opacity-100
                      transition-opacity
                    "
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <label
                  htmlFor="remember"
                  className="cursor-pointer select-none"
                >
                  Remember me
                </label>
              </div>

              <a className="font-medium hover:text-gray-600" href="#">
                Forgot password?
              </a>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-4 py-2 rounded-full border border-transparent bg-gray-950 shadow-md text-base font-medium whitespace-nowrap text-white data-disabled:bg-gray-950 data-disabled:opacity-40 data-hover:bg-gray-800"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="m-1.5 rounded-lg bg-gray-50 py-4 text-center text-sm/5 ring-1 ring-black/5">
            Not a member?
            <a className="font-medium hover:text-gray-600" href="#">
              Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
