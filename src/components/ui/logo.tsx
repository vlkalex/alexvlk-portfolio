import Image from "next/image";

export const Logo = () => {
  return (
    <>
      <span className="hidden dark:block">
        <Image
          src="/logos/vlk-light.png"
          alt="Logo"
          width={56}
          height={56}
          className="rounded-sm"
        />
      </span>
      <span className="dark:hidden">
        <Image
          src="/logos/vlk-dark.png"
          alt="Logo"
          width={56}
          height={56}
          className="rounded-sm"
        />
      </span>
    </>
  );
};
