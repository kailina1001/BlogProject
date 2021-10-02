import * as React from "react";
import { memo } from "react";
import { IUser } from "../../../types";
// import { Title } from "../../atoms/Title";
import { PostCard } from "../../molecules/PostCard/PostCard";
// import { UserCard } from "../../atoms/UserCard";
import "./index.css";

interface IUserList {}

export const UserList = memo(() => {
  return (
    <>
      {/* <Title title={title} /> */}
      <div className="user-list">
        {/*  {users?.map((user) => (
          <div key={user.id}>
            <div onClick={() => onClickUser(user.id)}>
              <PostCard {...user} />
            </div>
          </div>
        ))} */}
      </div>
    </>
  );
});
