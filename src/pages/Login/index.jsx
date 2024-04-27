import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Input } from "../../components";

export default function LoginnPage() {
  return (
    <>
      <Helmet>
        <title>Design</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* main login section */}
      <div className="relative h-[1080px] w-full">
        {/* login signup navigation section */}
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full">
          <div className="h-[1080px] bg-black-900" />
        </div>

        {/* logo and login form container section */}
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto block h-[1080px] w-full items-start rounded-bl-[30px] rounded-br-[30px] rounded-tr-[30px] bg-[url(/public/images/img_group_5.png)] bg-cover bg-no-repeat p-2.5 md:h-auto">
          {/* logo and login form section */}
          <div className="mb-[41px] ml-[309px] flex w-[49%] flex-col items-center gap-6 md:ml-0 md:w-full">
            {/* logo container section */}
            <div className="flex flex-wrap shadow-sm">
              <Text size="md" as="p" className="bg-black-900 !font-padyakkeexpandedone !text-purple-A100">
                Go
              </Text>
              <Text size="md" as="p" className="bg-black-900 !font-padyakkeexpandedone !text-blue_gray-800">
                CPT
              </Text>
            </div>

            {/* login form section */}
            <div className="relative flex flex-col items-center justify-center gap-[62px] self-stretch rounded-[50px] border border-solid border-white-A700_3f bg-white-A700_05 p-10 shadow-xs sm:gap-[31px] sm:p-5">
              <a href="#" className="mt-[152px]">
                <Text size="md" as="p" className="text-center">
                  LOG IN
                </Text>
              </a>

              {/* email and password fields section */}
              <div className="mb-[149px] flex flex-col items-center self-stretch">
                <Text as="p" className="ml-3 self-start md:ml-0">
                  E-Mail Address
                </Text>
                <Input shape="round" type="email" name="email" placeholder={`E-Mail Address`} className="sm:pr-5" />

                {/* password field container section */}
                <div className="mt-9 flex flex-col items-start self-stretch">
                  <Text as="p" className="ml-3 md:ml-0">
                    Password
                  </Text>
                  <Input shape="round" type="password" name="password" placeholder={`Password`} className="sm:pr-5" />
                </div>
                <a href="#" className="ml-3 mt-[38px] self-start md:ml-0">
                  <Text as="p">Forgot Password?</Text>
                </a>
                <Img src="images/img_login.png" alt="login" className="mt-[57px] h-[46px] object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* signup prompt section */}
        <div className="absolute bottom-0 right-[0.00px] top-0 my-auto flex h-max w-[26%] flex-col items-center rounded-[30px] border-solid border-white-A700_3f bg-white-A700_19 p-10 md:p-5">
          <div className="mb-[344px] mt-[323px] flex w-[77%] flex-col items-center gap-[53px] md:w-full sm:gap-[26px]">
            <Text size="s" as="p" className="w-full text-center">
              Dont have an account?
            </Text>
            <Img src="images/img_sign_up_white_a700.png" alt="signup" className="mt-[57px] h-[46px] object-cover" />
          </div>
        </div>
      </div>
    </>
  );
}
