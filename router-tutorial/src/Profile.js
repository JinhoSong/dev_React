import React from "react";

const data = {
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자"
  },

  gildong: {
    name: "홍길동",
    description: "끄앙"
  }
};

const Profile = ({ match }) => {
  const { username } = match.params; //이게 멀까
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
