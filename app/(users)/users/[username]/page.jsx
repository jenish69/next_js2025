import Image from "next/image";

const singleProfile = async (props) => {

    const res = await fetch("https://api.api-ninjas.com/v1/randomimage", {
        headers: {
        "X-Api-Key": process.env.X_Api_Key,
        Accept: "image/jpeg",
        },
        cache: "no-store",
    });

    const imageBuffer = await res.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString("base64");
    const imageSrc = `data:image/jpeg;base64,${base64Image}`;
    // console.log(imageSrc);

    const user = await props.params;
    console.log(user);

    return (
        <div className="min-h-[673px] bg-black transition duration-300">
      <div className="max-w-3xl mx-auto py-8 px-4">
        <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-[150px] h-[150px] relative">
                <Image
                    src={imageSrc} // replace with your image path
                    alt="User Profile"
                    fill={true}
                    style={{objectFit: "cover", borderRadius: "100%"}}
                />
            </div>
          <h1 className="text-2xl font-bold">{user.username}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {user.username}@gmail.com
          </p>
          <p className="mt-4 text-base max-w-xl">
            Hello! I’m {user.username}, a passionate web developer with interest in frontend and backend technologies. I love building creative UIs and writing clean, scalable code.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Account Details</h2>
          <div className="space-y-2">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <p><strong>Username:</strong> {user.username}XP</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <p><strong>Location:</strong> Gujarat, India</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <p><strong>Member Since:</strong> July 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default singleProfile;