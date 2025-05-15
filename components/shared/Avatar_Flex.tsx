import { User } from "@heroui/react";

export function Avatar_Flex({ avatar, name }: { avatar: string | "https://i.pravatar.cc/150?u=a04258114e29026702d", name: string }) {
  return (
    <User
      avatarProps={{
        src: avatar,
      }}
      name={name}
      className="flex text-white font-serif font-semibold text-lg items-center justify-start"
    />
  );
}
