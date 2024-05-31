import OrbitingCircles from "@/components/orbiting-circles";

import Image from "next/image";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full  items-center justify-center overflow-hidden rounded-3xl border bg-[url('/images/background-vector.png')] bg-cover bg-center md:shadow-xl dark">
      <span className="pointer-events-none whitespace-pre-wrap   text-center text-8xl font-semibold leading-none   ">
        <Image
          src="/images/plus.png"
          alt="plus icon"
          width={85}
          height={85}
          className="object-contain"
        />
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.whatsapp />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.notion />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
      >
        <Icons.googleDrive />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
        delay={20}
      >
        <Icons.gitHub />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  gitHub: () => (
    <svg
      width="63"
      height="62"
      viewBox="0 0 63 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1.49994" y="1" width="60" height="60" rx="30" fill="#190E26" />
      <rect
        x="1.49994"
        y="1"
        width="60"
        height="60"
        rx="30"
        fill="white"
        fillOpacity="0.04"
      />
      <rect
        x="1.49994"
        y="1"
        width="60"
        height="60"
        rx="30"
        stroke="#190E26"
        strokeWidth="1.5"
      />
      <rect
        x="1.49994"
        y="1"
        width="60"
        height="60"
        rx="30"
        stroke="url(#paint0_linear_9_1071)"
        strokeOpacity="0.1"
        strokeWidth="1.5"
      />
      <path
        d="M43.7999 24.97C43.6799 27.49 41.9099 30.97 38.4899 35.38C34.9499 39.97 31.9499 42.28 29.5199 42.28C27.9899 42.28 26.7299 40.87 25.6799 38.08C24.9899 35.5 24.2699 32.95 23.5799 30.37C22.7999 27.58 21.9599 26.17 21.0599 26.17C20.8799 26.17 20.1899 26.59 19.0199 27.4L17.7899 25.81C19.0799 24.67 20.3399 23.56 21.5999 22.42C23.3099 20.95 24.5999 20.17 25.4699 20.08C27.4799 19.9 28.7399 21.28 29.2199 24.22C29.7299 27.43 30.0899 29.41 30.2699 30.19C30.8399 32.83 31.4999 34.18 32.1899 34.18C32.7299 34.18 33.5399 33.31 34.6499 31.6C35.7299 29.89 36.3299 28.57 36.3899 27.67C36.5399 26.2 35.9699 25.45 34.6499 25.45C34.0199 25.45 33.3899 25.6 32.7299 25.87C34.0199 21.67 36.4499 19.66 40.0499 19.78C42.6899 19.84 43.9499 21.58 43.7999 24.97Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9_1071"
          x1="31.4999"
          y1="1"
          x2="31.4999"
          y2="61"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  notion: () => (
    <svg
      width="63"
      height="62"
      viewBox="0 0 63 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1.5" y="1" width="60" height="60" rx="30" fill="#190E26" />
      <rect
        x="1.5"
        y="1"
        width="60"
        height="60"
        rx="30"
        fill="white"
        fillOpacity="0.04"
      />
      <rect
        x="1.5"
        y="1"
        width="60"
        height="60"
        rx="30"
        stroke="#190E26"
        strokeWidth="1.5"
      />
      <rect
        x="1.5"
        y="1"
        width="60"
        height="60"
        rx="30"
        stroke="url(#paint0_linear_9_1077)"
        strokeOpacity="0.1"
        strokeWidth="1.5"
      />
      <path
        d="M18.8438 41.125C18.8438 39.261 20.3548 37.75 22.2188 37.75C24.0827 37.75 25.5938 39.261 25.5938 41.125C25.5938 42.989 24.0827 44.5 22.2188 44.5C20.3548 44.5 18.8438 42.989 18.8438 41.125Z"
        fill="white"
      />
      <path
        d="M28.125 31C28.125 29.136 29.636 27.625 31.5 27.625C33.364 27.625 34.875 29.136 34.875 31V41.125C34.875 42.989 33.364 44.5 31.5 44.5C29.636 44.5 28.125 42.989 28.125 41.125V31Z"
        fill="white"
      />
      <path
        d="M37.4062 20.875C37.4062 19.011 38.9173 17.5 40.7812 17.5C42.6452 17.5 44.1562 19.011 44.1562 20.875V41.125C44.1562 42.989 42.6452 44.5 40.7812 44.5C38.9173 44.5 37.4062 42.989 37.4062 41.125V20.875Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9_1077"
          x1="31.5"
          y1="1"
          x2="31.5"
          y2="61"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  openai: (props: any) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  googleDrive: () => (
    <svg
      width="63"
      height="62"
      viewBox="0 0 63 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1.5" y="1" width="60" height="60" rx="30" fill="#190E26" />
      <rect
        x="1.5"
        y="1"
        width="60"
        height="60"
        rx="30"
        fill="white"
        fillOpacity="0.04"
      />
      <rect
        x="1.5"
        y="1"
        width="60"
        height="60"
        rx="30"
        stroke="url(#paint0_linear_9_1064)"
        strokeOpacity="0.1"
        strokeWidth="1.5"
      />
      <g clipPath="url(#clip0_9_1064)">
        <path
          fillRule="evenodd"

          clipRule="evenodd"
          d="M36.2903 35.6451C34.6869 35.6451 33.3871 34.3452 33.3871 32.742C33.3871 31.1385 34.6869 29.8386 36.2903 29.8386C37.8937 29.8386 39.1935 31.1385 39.1935 32.742C39.1935 34.3452 37.8937 35.6451 36.2903 35.6451ZM37.1449 27.1837V24.6259C37.8209 24.3105 38.2944 23.6351 38.2944 22.8513V22.7923C38.2944 21.7105 37.3982 20.8254 36.3029 20.8254H36.2434C35.1481 20.8254 34.2519 21.7105 34.2519 22.7923V22.8513C34.2519 23.6351 34.7254 24.3108 35.4015 24.6261V27.1837C34.395 27.3374 33.4754 27.7473 32.7169 28.3507L25.6061 22.8877C25.6531 22.7098 25.686 22.5266 25.6863 22.334C25.6874 21.109 24.6834 20.1144 23.4426 20.1128C22.2023 20.1114 21.1949 21.1033 21.1935 22.3285C21.1921 23.5537 22.1961 24.5483 23.437 24.5497C23.8412 24.5503 24.2155 24.4369 24.5435 24.2526L31.5381 29.6267C30.9433 30.5134 30.5947 31.5756 30.5947 32.7192C30.5947 33.9163 30.9777 35.0238 31.6247 35.9345L29.4977 38.0354C29.3296 37.9855 29.1552 37.9507 28.9703 37.9507C27.951 37.9507 27.1244 38.7668 27.1244 39.7736C27.1244 40.7806 27.951 41.5967 28.9703 41.5967C29.9899 41.5967 30.8162 40.7806 30.8162 39.7736C30.8162 39.5915 30.781 39.419 30.7305 39.2529L32.8345 37.1749C33.7896 37.8947 34.9791 38.3273 36.2733 38.3273C39.4095 38.3273 41.9516 35.8164 41.9516 32.7192C41.9516 29.9153 39.866 27.5989 37.1449 27.1837Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_9_1064"
          x1="31.5"
          y1="1"
          x2="31.5"
          y2="61"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.8" />
          <stop offset="1" stopColor="white" stopOpacity="0.8" />
        </linearGradient>
        <clipPath id="clip0_9_1064">
          <rect
            x="13.5"
            y="13"
            width="36"
            height="35.7097"
            rx="12"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  whatsapp: () => (
    <svg
      width="63"
      height="62"
      viewBox="0 0 63 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.02002"
        y="1"
        width="60.48"
        height="60"
        rx="30"
        fill="#190E26"
      />
      <rect
        x="1.02002"
        y="1"
        width="60.48"
        height="60"
        rx="30"
        fill="white"
        fillOpacity="0.08"
      />
      <rect
        x="1.02002"
        y="1"
        width="60.48"
        height="60"
        rx="30"
        stroke="url(#paint0_linear_9_1080)"
        strokeOpacity="0.1"
        strokeWidth="1.5"
      />
      <g clipPath="url(#clip0_9_1080)">
        <path
          d="M26.4883 12.9795L22.6205 16.8347L26.4883 20.6899L30.3561 16.8347L26.4883 12.9795Z"
          fill="white"
        />
        <path
          d="M36.0661 12.9925L32.1983 16.8477L36.0661 20.7028L39.934 16.8477L36.0661 12.9925Z"
          fill="white"
        />
        <path
          d="M36.073 31.7513L32.2052 35.6064L36.073 39.4616L39.9409 35.6064L36.073 31.7513Z"
          fill="white"
        />
        <path
          d="M26.8961 41.7439L30.3148 45.1515L26.4537 49L22.5925 45.1515L26.0515 41.7439V39.0178L23.0349 36.0513H20.2999L16.8812 39.4588L13.02 35.6103L16.8812 31.7617L20.2999 35.1693H23.0349L26.4537 31.7617L30.3148 35.6103L26.8961 39.0178V41.7439Z"
          fill="url(#paint1_linear_9_1080)"
          fillOpacity="0.4"
        />
        <path
          d="M36.0599 41.2979L32.1921 45.1531L36.0599 49.0083L39.9277 45.1531L36.0599 41.2979Z"
          fill="white"
        />
        <path
          d="M45.6794 31.7361L41.8115 35.5913L45.6794 39.4465L49.5472 35.5913L45.6794 31.7361Z"
          fill="white"
        />
        <path
          d="M26.4801 22.1631L22.6123 26.0183L26.4801 29.8735L30.348 26.0183L26.4801 22.1631Z"
          fill="white"
        />
        <path
          d="M16.8738 22.1783L13.006 26.0334L16.8738 29.8886L20.7416 26.0334L16.8738 22.1783Z"
          fill="white"
        />
        <path
          d="M36.058 22.1763L32.1901 26.0315L36.058 29.8867L39.9258 26.0315L36.058 22.1763Z"
          fill="white"
        />
        <path
          d="M45.6642 22.1609L41.7964 26.0161L45.6642 29.8713L49.532 26.0161L45.6642 22.1609Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_9_1080"
          x1="31.26"
          y1="1"
          x2="31.26"
          y2="61"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.83" />
          <stop offset="1" stopColor="white" stopOpacity="0.79" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_9_1080"
          x1="21.6674"
          y1="31.7617"
          x2="21.6674"
          y2="49"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.32" />
          <stop offset="1" stopColor="white" stopOpacity="0.32" />
        </linearGradient>
        <clipPath id="clip0_9_1080">
          <rect
            width="36.48"
            height="36"
            fill="white"
            transform="translate(13.02 13)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
};
