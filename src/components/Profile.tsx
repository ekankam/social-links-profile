import profileImg from "../assets/images/avatar-jessica.jpeg";
import Button from "./Button";

const Links: string[] = [
  "Github",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
];
function Profile() {
  return (
    <div className="bg-cc-grey-800 rounded-xl p-10 flex flex-col gap-6 text-white">
      <div className="flex flex-col gap-6 text-center">
        <div className="relative h-[88px] w-[88px] rounded-full overflow-hidden mx-auto">
          <img
            src={profileImg}
            alt="avatar jessica"
            className="w-full h-full"
          />
        </div>
        <div>
          <h1 className="text-2xl">Jessica Randall</h1>
          <span className="text-cc-green">London, United Kingdom</span>
        </div>
        <p className="text-sm">"Front-end developer and avid reader."</p>
      </div>
      <div className="space-y-4">
        {Links.map((link) => (
          <Button key={link} label={link} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
