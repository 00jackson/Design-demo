import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Input } from "../../components";

export default function SignuppPage() {
  return (
    <>
      <Helmet>
        <title>Design</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* signup section */}
      <div className="relative h-[1080px] w-full md:h-auto">
        {/* logo and signup form section */}
        <div className="flex h-[1080px] items-start md:flex-col">
          <Img src="images/img_beats.png" alt="beats" className="sticky h-[1080px] object-cover md:w-full" />

          {/* logo row section */}
          <div className="relative ml-[-38px] h-[1080px] flex-1 bg-[url(/public/images/img_group_6.svg)] bg-cover bg-no-repeat md:ml-0 md:h-auto md:self-stretch md:p-5">
            {/* logo and navigation section */}
            <div className="relative flex h-[1080px] items-center justify-end bg-[url(/public/images/img_group_14.png)] bg-cover bg-no-repeat md:h-auto">
              <div className="flex h-[1080px] w-[74%] flex-col items-center gap-7 bg-white-A700_0c p-2.5 md:w-full">
                {/* logo section */}
                <div className="flex flex-wrap">
                  <Text size="md" as="p" className="bg-black-900 !font-padyakkeexpandedone !text-purple-A100">
                    Go
                  </Text>
                  <Text size="md" as="p" className="bg-black-900 !font-padyakkeexpandedone !text-blue_gray-800">
                    CPT
                  </Text>
                </div>

                {/* signup form section */}
                <div className="mb-[37px] flex w-[56%] flex-col items-center justify-center gap-[63px] rounded-[50px] border border-solid border-white-A700_3f bg-white-A700_05 p-10 shadow-xs md:w-full sm:gap-[31px] sm:p-5">
                  <a href="#" className="mt-14">
                    <Text size="md" as="p" className="text-center">
                      SIGN UP
                    </Text>
                  </a>
                  <div className="mb-[53px] flex flex-col items-center self-stretch">
                    <div className="flex flex-col items-start self-stretch">
                      <Text as="p" className="ml-3 md:ml-0">
                        Name
                      </Text>
                      <Input shape="round" type="text" name="name" placeholder={`Name`} className="sm:pr-5" />
                    </div>
                    <div className="mt-9 flex flex-col items-start self-stretch">
                      <Text as="p" className="ml-3 md:ml-0">
                        E-Mail Address
                      </Text>
                      <Input
                        shape="round"
                        type="email"
                        name="email"
                        placeholder={`E-Mail Address`}
                        className="sm:pr-5"
                      />
                    </div>
                    <div className="mt-9 flex flex-col items-start self-stretch">
                      <Text as="p" className="ml-3 md:ml-0">
                        Password
                      </Text>
                      <Input
                        shape="round"
                        type="password"
                        name="password"
                        placeholder={`Password`}
                        className="sm:pr-5"
                      />
                    </div>
                    <div className="mt-9 flex flex-col items-start self-stretch">
                      <Text as="p" className="ml-3 md:ml-0">
                        Confirm Password
                      </Text>
                      <Input
                        shape="round"
                        type="password"
                        name="confirmpassword"
                        placeholder={`Confirm Password`}
                        className="sm:pr-5"
                      />
                    </div>
                    <Img src="images/img_sign_up.png" alt="signup" className="mt-[60px] h-[46px] object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* login prompt section */}
        <div className="absolute bottom-0 left-[0.00px] top-0 z-[2] my-auto flex h-max w-[26%] flex-col items-center justify-center gap-[74px] rounded-[30px] border border-solid border-white-A700_3f bg-white-A700_19 p-2.5 md:gap-[55px] md:p-5 sm:gap-[37px]">
          <a href="#" className="mt-[330px] w-[77%] md:w-full">
            <Text size="s" as="p" className="text-center">
              Already have an account?
            </Text>
          </a>
          <Img src="images/img_login.png" alt="login" className="mb-[330px] block h-[46px] object-cover" />
        </div>
      </div>
    </>
  );
}
