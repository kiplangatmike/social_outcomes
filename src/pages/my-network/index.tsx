import Avatar from "$components/common/Avatar";
import Layout from "$components/common/Layout";
import React from "react";

const Network = () => {
  return (
    <Layout>
      <div className="feed-card mx-auto flex flex-grow flex-col items-center rounded-3xl pb-8">
        <h1 className="my-2 text-2xl font-bold">My Network</h1>
        <div className="w-[93%]">
          <input
            type="text"
            placeholder="Search for users"
            className="mb-4 w-full rounded-xl border-none p-2"
          />
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar size={50} />
              <div className="flex-1">
                <h2 className="font-semibold">Liplan</h2>
                <p className="text-gray-500">@Liplan</p>
              </div>
              <button className="rounded-xl bg-blue-400/30 px-4 py-2 font-bold text-white hover:bg-blue-500/30">
                Unfollow
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar size={50} />
              <div className="flex-1">
                <h2 className="font-semibold">Mercy</h2>
                <p className="text-gray-500">@Mercy</p>
              </div>
              <button className="rounded-xl bg-blue-400/30 px-4 py-2 font-bold text-white hover:bg-blue-500/30">
                follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Network;
