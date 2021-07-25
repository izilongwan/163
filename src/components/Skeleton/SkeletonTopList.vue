<template>
  <div class="skeleton-wrap">
    <svg
      role="img"
      width="400"
      height="600"
      aria-labelledby="loading-aria"
      viewBox="0 0 400 600"
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
          <rect x="10" y="5" rx="5" ry="5" width="209" height="24" />
          <rect x="10" y="40" rx="0" ry="0" width="106" height="106" />
          <rect x="143" y="46" rx="5" ry="5" width="250" height="17" />
          <rect x="146" y="84" rx="5" ry="5" width="250" height="17" />
          <rect x="146" y="118" rx="5" ry="5" width="250" height="17" />
          <rect x="10" y="172" rx="0" ry="0" width="106" height="106" />
          <rect x="143" y="178" rx="5" ry="5" width="250" height="17" />
          <rect x="146" y="216" rx="5" ry="5" width="250" height="17" />
          <rect x="146" y="250" rx="5" ry="5" width="250" height="17" />
          <rect x="12" y="303" rx="0" ry="0" width="106" height="106" />
          <rect x="145" y="309" rx="5" ry="5" width="250" height="17" />
          <rect x="148" y="347" rx="5" ry="5" width="250" height="17" />
          <rect x="148" y="381" rx="5" ry="5" width="250" height="17" />
          <rect x="14" y="436" rx="5" ry="5" width="209" height="24" />
          <rect x="15" y="479" rx="0" ry="0" width="106" height="106" />
          <rect x="148" y="485" rx="5" ry="5" width="250" height="17" />
          <rect x="151" y="523" rx="5" ry="5" width="250" height="17" />
          <rect x="151" y="557" rx="5" ry="5" width="250" height="17" />
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
  name: 'SkeletonTopList',
  components: {
    // TopListSvg,
    Loading
  }
}
</script>
