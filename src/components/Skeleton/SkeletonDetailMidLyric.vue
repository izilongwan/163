<template>
  <div class="skeleton-wrap">
    <svg
      role="img"
      width="340"
      height="320"
      aria-labelledby="loading-aria"
      viewBox="0 0 340 320"
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
          <rect x="15" y="751" rx="0" ry="0" width="40" height="40" />
          <rect x="66" y="761" rx="5" ry="5" width="226" height="19" />
          <rect x="110" y="14" rx="5" ry="5" width="120" height="18" />
          <rect x="85" y="48" rx="5" ry="5" width="170" height="18" />
          <rect x="65" y="84" rx="5" ry="5" width="210" height="18" />
          <rect x="25" y="118" rx="5" ry="5" width="290" height="18" />
          <rect x="5" y="151" rx="5" ry="5" width="330" height="18" />
          <rect x="45" y="185" rx="5" ry="5" width="250" height="18" />
          <rect x="80" y="221" rx="5" ry="5" width="180" height="18" />
          <rect x="100" y="253" rx="5" ry="5" width="140" height="18" />
          <rect x="120" y="287" rx="5" ry="5" width="100" height="18" />
        </clipPath>
        <linearGradient id="fill">
          <stop offset="0.599964" stop-color="#8c8c8c" stop-opacity="1">
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
          <stop offset="2.59996" stop-color="#8c8c8c" stop-opacity="1">
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
  name: 'SkeletonDetailMidLyric',
  components: {
    // TopListSvg,
    Loading
  }
}
</script>
