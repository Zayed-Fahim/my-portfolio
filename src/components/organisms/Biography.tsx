import { Animation } from "@/components/molecules";
import { Connect, TechStacks } from "@/components/organisms";
import Link from "next/link";

const Biography = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col text-[17px] gap-10">
          <Animation delay={0.16}>
            <div>
              <h1 className="font-incognito font-semibold tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/2">
                I&apos;m Zayed Fahim. I live in Dhaka, <br /> where I build the
                future.
              </h1>
            </div>
          </Animation>
          <div className="flex flex-col gap-5 text-[#52525b] dark:text-[#a1a1aa]">
            <Animation delay={0.18}>
              <p>
                Hi there! Thanks for visiting my digital home on the internet.
              </p>
            </Animation>
            <Animation delay={0.2}>
              <p>
                I&apos;m Sayed Asif Zayed, a Software Engineer with a focus on
                delivery innovative digital solutions that drive business value.
                I am currently working at{" "}
                <span className="text-secondary-color hover:dark:text-white hover:text-black">
                  <Link href="https://zaynaxhealth.com" target="_blank">
                    Zaynax Health
                  </Link>
                </span>
                , a well-regarded company located in Badda, Dhaka, where I have
                the opportunity to put my skills to work on a daily basis.
              </p>
            </Animation>
            <Animation delay={0.22}>
              <p>
                I have a wealth of experience in crafting scalable software
                systems that meet both technical and business requirements,
                utilizing a range of programming languages such as{" "}
                <span className="text-secondary-color hover:dark:text-white hover:text-black cursor-pointer">
                  JavaScript
                </span>
                ,{" "}
                <span className="text-secondary-color hover:dark:text-white hover:text-black cursor-pointer">
                  TypeScript
                </span>
                . Leveraging my proficiency in backend frameworks like{" "}
                <span className="text-secondary-color hover:dark:text-white hover:text-black cursor-pointer">
                  Node.js
                </span>
                ,{" "}
                <span className="text-secondary-color hover:dark:text-white hover:text-black cursor-pointer">
                  Express.js
                </span>
                ,{" "}
                <span className="text-secondary-color hover:dark:text-white hover:text-black cursor-pointer">
                  Nest.js
                </span>{" "}
                coupled with expertise in frontend frameworks such as{" "}
                <span className="text-secondary-color hover:dark:text-white hover:text-black cursor-pointer">
                  React.js
                </span>{" "}
                and{" "}
                <span className="text-secondary-color hover:dark:text-white hover:text-black cursor-pointer">
                  Next.js
                </span>
                , allows me to deliver efficient and effective software
                solutions that meet the unique needs of organizations.
              </p>
            </Animation>
            <Animation delay={0.24}>
              <p>
                In my role as a Software Engineer, I take a charge of
                developing, and maintaining software that meets both technical
                specifications and business requirements. I understand the
                importance of delivering high-quality products that not only
                meet technical requirements, but also provide tangible business
                value. To achieve this, I work closely with organizations to
                understand their unique needs and requirements, and I utilize my
                technical expertise to deliver customized solutions that drive
                business outcomes.
              </p>
            </Animation>
            <Animation delay={0.26}>
              <p>
                I consider myself a curious and inquisitive person, always eager
                to learn and improve my skills. In my free time, I enjoy working
                on personal side projects, as it provides me with an opportunity
                to explore new technologies and further my knowledge and
                expertise. I am also a continuous learner, and I actively seek
                out new learning opportunities in order to stay up-to-date with
                the latest industry advancements.
              </p>
            </Animation>
            <Animation delay={0.28}>
              <p>
                I also have a strong appreciation for video games and music. I
                find that these activities provide an important balance to my
                professional life, allowing me to relax and recharge after a
                long day at work. I believe that maintaining a healthy work-life
                balance is the key to keeping both my code and my spirits
                bug-free! 🎮🎶
              </p>
            </Animation>
          </div>
        </div>

        <TechStacks />

        <Animation delay={0.3}>
          <Connect />
        </Animation>
      </div>
    </>
  );
};

export default Biography;
