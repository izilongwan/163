<template>
  <div class="skeleton-wrap">
    <svg
      role="img"
      width="100%"
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
          <rect x="15" y="5" rx="5" ry="5" width="100" height="25" />
          <rect x="15" y="751" rx="0" ry="0" width="40" height="40" />
          <rect x="66" y="761" rx="5" ry="5" width="226" height="19" />
          <rect x="15" y="55" rx="5" ry="5" width="66" height="18" />
          <rect x="91" y="55" rx="5" ry="5" width="205" height="18" />
          <rect x="307" y="55" rx="5" ry="5" width="66" height="18" />
          <rect x="15" y="83" rx="5" ry="5" width="166" height="18" />
          <rect x="194" y="84" rx="5" ry="5" width="166" height="18" />
          <rect x="15" y="113" rx="5" ry="5" width="86" height="18" />
          <rect x="15" y="144" rx="5" ry="5" width="126" height="18" />
          <rect x="108" y="113" rx="5" ry="5" width="86" height="18" />
          <rect x="204" y="114" rx="5" ry="5" width="86" height="18" />
          <rect x="297" y="114" rx="5" ry="5" width="76" height="18" />
          <rect x="149" y="145" rx="5" ry="5" width="126" height="18" />
          <rect x="285" y="145" rx="5" ry="5" width="86" height="18" />
          <rect x="15" y="171" rx="5" ry="5" width="286" height="18" />
          <rect x="310" y="171" rx="5" ry="5" width="66" height="18" />
          <rect x="15" y="198" rx="5" ry="5" width="286" height="18" />
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
  name: 'SkeletonSearchHot',
  components: {
    // TopListSvg,
    Loading
  }
}
</script>
