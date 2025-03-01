import { Image } from "antd";
import React from "react";
import CredentialAtom from "~/components/Atoms/CredentialAtom/CredentialAtom";
import SectionHeadingTextAtom from "~/components/Atoms/SectionHeadingTextAtom/SectionHeaderAtom";
import SkillTagAtom from "~/components/Atoms/SkillTagAtom/SkillTagAtom";
import SectionWrapper from "~/components/Components/SectionWrapper/SectionWrapper";
import TypingText from "~/components/Components/TypingText/TypingText";

type Props = {
  skills: React.ComponentProps<typeof SkillTagAtom>[];
  credentials: React.ComponentProps<typeof CredentialAtom>[];
  intro: React.ComponentProps<typeof TypingText>;
  heading: React.ComponentProps<typeof SectionHeadingTextAtom>;
};

export default function AboutSectionModule(props: Props) {
  return (
    <SectionWrapper id="about">
      <div className='relative w-full gap-12 md:flex'>
        <div className='relative'>
          <Image
            src='/images/hero-avatar.webp'
            alt='Hero Avatar'
            preview={false}
            className='h-64 min-w-64 rounded-full'
          />
          <div className='absolute bottom-5 md:bottom-16'>
            <TypingText {...props.intro} />
          </div>
        </div>
        <div className='flex w-full flex-col gap-4'>
          <SectionHeadingTextAtom text={props.heading.text} />
          <div className='section-h2'>
            <h2>UI & UX Designer.</h2>
            <h2 className='-mt-2'>Photographer</h2>
          </div>
          <div className='flex flex-wrap items-center gap-2 md:justify-between'>
            {props.skills.map((skill, index) => (
              <SkillTagAtom key={index} {...skill} />
            ))}
          </div>
          <p className='text-base text-[#838485]'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>
      <div className='mt-4 flex flex-col gap-6 md:mt-1  md:flex-row md:items-center md:gap-20'>
        {props.credentials.map((credential, index) => (
          <CredentialAtom key={index} {...credential} />
        ))}
      </div>
    </SectionWrapper>
  );
}
