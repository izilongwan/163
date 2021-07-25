<template>
  <div class="skeleton-wrap">
    <svg
      role="img"
      width="100%"
      height="800"
      aria-labelledby="loading-aria"
      viewBox="0 0 400 800"
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
          <rect x="10" y="5" rx="5" ry="5" width="380" height="24" />
          <circle cx="200" cy="147" r="100" />
          <rect x="16" y="263" rx="0" ry="0" width="180" height="34" />
          <rect x="216" y="263" rx="0" ry="0" width="180" height="34" />
          <rect x="18" y="310" rx="10" ry="10" width="44" height="43" />
          <rect x="85" y="312" rx="5" ry="5" width="207" height="16" />
          <rect x="86" y="336" rx="5" ry="5" width="307" height="16" />
          <rect x="18" y="368" rx="10" ry="10" width="44" height="43" />
          <rect x="85" y="370" rx="5" ry="5" width="207" height="16" />
          <rect x="86" y="394" rx="5" ry="5" width="307" height="16" />
          <rect x="18" y="427" rx="10" ry="10" width="44" height="43" />
          <rect x="85" y="429" rx="5" ry="5" width="207" height="16" />
          <rect x="86" y="453" rx="5" ry="5" width="307" height="16" />
          <rect x="18" y="484" rx="10" ry="10" width="44" height="43" />
          <rect x="85" y="486" rx="5" ry="5" width="207" height="16" />
          <rect x="86" y="510" rx="5" ry="5" width="307" height="16" />
          <rect x="92" y="826" rx="5" ry="5" width="307" height="16" />
          <rect x="18" y="541" rx="10" ry="10" width="44" height="43" />
          <rect x="85" y="543" rx="5" ry="5" width="207" height="16" />
          <rect x="86" y="567" rx="5" ry="5" width="307" height="16" />
          <rect x="18" y="595" rx="10" ry="10" width="44" height="43" />
          <rect x="85" y="597" rx="5" ry="5" width="207" height="16" />
          <rect x="86" y="621" rx="5" ry="5" width="307" height="16" />
          <rect x="18" y="651" rx="10" ry="10" width="44" height="43" />
          <rect x="85" y="653" rx="5" ry="5" width="207" height="16" />
          <rect x="86" y="677" rx="5" ry="5" width="307" height="16" />
          <rect x="18" y="711" rx="10" ry="10" width="44" height="43" />
          <rect x="86" y="737" rx="5" ry="5" width="307" height="16" />
          <rect x="88" y="714" rx="5" ry="5" width="207" height="16" />
        </clipPath>
        <linearGradient id="fill">
          <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
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
          <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
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
  name: 'SkeletonListPlay',
  components: {
    // TopListSvg,
    Loading
  }
}
</script>
