import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="flex p-6">
        <div className="flex items-center">
          <p>Repository link :</p>
          <a
            className="ml-4"
            href="https://github.com/DmitryKremenetsky/slmax-react-next-testovoe-zadanie-v2"
          >
            <Image src="./git-logo.svg" width={25} height={25} alt="git-logo" />
          </a>
        </div>
      </div>
    </>
  );
}
