<template>
  <div class="skeleton-wrap">
    <svg
      role="img"
      width="100%"
      height="820"
      aria-labelledby="loading-aria"
      viewBox="0 0 400 820"
      preserveAspectRatio="none"
    >
      <title id="loading-aria">Loading...</title>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        clip-path="url(#clip-path)"
        style="fill: url('#fill')"
      ></rect>
      <defs>
        <clipPath id="clip-path">
          <rect x="10" y="5" rx="5" ry="5" width="164" height="25" />
          <rect x="9" y="51" rx="5" ry="5" width="119" height="20" />
          <circle cx="62" cy="118" r="21" />
          <rect x="32" y="146" rx="5" ry="5" width="60" height="15" />
          <rect x="328" y="85" rx="5" ry="5" width="60" height="15" />
          <rect x="122" y="110" rx="5" ry="5" width="265" height="15" />
          <rect x="105" y="132" rx="5" ry="5" width="213" height="15" />
          <circle cx="60" cy="209" r="21" />
          <rect x="31" y="237" rx="5" ry="5" width="60" height="15" />
          <rect x="328" y="173" rx="5" ry="5" width="60" height="15" />
          <rect x="120" y="201" rx="5" ry="5" width="265" height="15" />
          <rect x="103" y="223" rx="5" ry="5" width="230" height="15" />
          <circle cx="63" cy="294" r="21" />
          <rect x="33" y="322" rx="5" ry="5" width="60" height="15" />
          <rect x="328" y="258" rx="5" ry="5" width="60" height="15" />
          <rect x="123" y="286" rx="5" ry="5" width="265" height="15" />
          <rect x="106" y="308" rx="5" ry="5" width="113" height="15" />
          <circle cx="62" cy="380" r="21" />
          <rect x="32" y="408" rx="5" ry="5" width="61" height="15" />
          <rect x="328" y="344" rx="5" ry="5" width="60" height="15" />
          <rect x="123" y="372" rx="5" ry="5" width="265" height="15" />
          <rect x="106" y="394" rx="5" ry="5" width="215" height="15" />
          <circle cx="60" cy="472" r="21" />
          <rect x="31" y="500" rx="5" ry="5" width="61" height="15" />
          <rect x="328" y="435" rx="5" ry="5" width="60" height="15" />
          <rect x="121" y="464" rx="5" ry="5" width="265" height="15" />
          <rect x="104" y="486" rx="5" ry="5" width="232" height="15" />
          <circle cx="63" cy="558" r="21" />
          <rect x="32" y="586" rx="5" ry="5" width="61" height="15" />
          <rect x="328" y="520" rx="5" ry="5" width="60" height="15" />
          <rect x="124" y="550" rx="5" ry="5" width="265" height="15" />
          <rect x="107" y="572" rx="5" ry="5" width="114" height="15" />
          <rect x="7" y="626" rx="5" ry="5" width="119" height="20" />
          <circle cx="60" cy="696" r="21" />
          <rect x="30" y="724" rx="5" ry="5" width="60" height="15" />
          <rect x="328" y="654" rx="5" ry="5" width="60" height="15" />
          <rect x="120" y="685" rx="5" ry="5" width="265" height="15" />
          <rect x="103" y="707" rx="5" ry="5" width="213" height="15" />
          <circle cx="58" cy="787" r="21" />
          <rect x="29" y="815" rx="5" ry="5" width="60" height="15" />
          <rect x="328" y="746" rx="5" ry="5" width="60" height="15" />
          <rect x="118" y="776" rx="5" ry="5" width="265" height="15" />
          <rect x="101" y="798" rx="5" ry="5" width="230" height="15" />
          <circle cx="62" cy="872" r="21" />
          <rect x="32" y="887" rx="5" ry="5" width="60" height="15" />
          <rect x="273" y="823" rx="5" ry="5" width="60" height="15" />
          <rect x="122" y="848" rx="5" ry="5" width="213" height="15" />
          <rect x="105" y="873" rx="5" ry="5" width="113" height="15" />
        </clipPath>
        <linearGradient id="fill">
          <stop offset="0.599964" stop-color="#e6e6e6" stop-opacity="1">
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1">
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="2.59996" stop-color="#e6e6e6" stop-opacity="1">
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
        </linearGradient>
      </defs>
    </svg>

    <Loading />
  </div>
</template>

<script>
// import TopListSvg from './svgs/top-list.svg'
import Loading from 'components/Sub/Loading'

export default {
  name: 'SkeletonComment',
  components: {
    // TopListSvg,
    Loading
  }
}
</script>
