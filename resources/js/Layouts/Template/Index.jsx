import React from "react";

export default function Template({ children }) {
    return (
        <>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* Start: Sidebar */}

                {/* End: Sidebar */}

                {/* Start: Content */}
                <div>
                    {/* Start: Topbar */}

                    {/* End: Topbar */}
                    <main>{children}</main>
                </div>
                {/* End: Content */}
            </div>
            <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
                <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </>
    );
}
