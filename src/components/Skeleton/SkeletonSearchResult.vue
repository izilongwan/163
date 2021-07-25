<template>
  <div class="skeleton-wrap">
    <svg
      role="img"
      width="400"
      height="524"
      aria-labelledby="loading-aria"
      viewBox="0 0 400 524"
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
          <rect x="14" y="14" rx="5" ry="5" width="150" height="18" />
          <rect x="14" y="36" rx="5" ry="5" width="350" height="18" />
          <rect x="15" y="66" rx="5" ry="5" width="150" height="18" />
          <rect x="15" y="88" rx="5" ry="5" width="350" height="18" />
          <rect x="15" y="118" rx="5" ry="5" width="150" height="18" />
          <rect x="15" y="140" rx="5" ry="5" width="350" height="18" />
          <rect x="16" y="170" rx="5" ry="5" width="150" height="18" />
          <rect x="16" y="192" rx="5" ry="5" width="350" height="18" />
          <rect x="15" y="225" rx="5" ry="5" width="150" height="18" />
          <rect x="15" y="247" rx="5" ry="5" width="350" height="18" />
          <rect x="16" y="277" rx="5" ry="5" width="150" height="18" />
          <rect x="16" y="299" rx="5" ry="5" width="350" height="18" />
          <rect x="17" y="329" rx="5" ry="5" width="150" height="18" />
          <rect x="17" y="351" rx="5" ry="5" width="350" height="18" />
          <rect x="18" y="381" rx="5" ry="5" width="150" height="18" />
          <rect x="18" y="403" rx="5" ry="5" width="350" height="18" />
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
  name: 'SkeletonSearchResult',
  components: {
    // TopListSvg,
    Loading
  }
}
</script>
