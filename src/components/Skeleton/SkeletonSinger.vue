<template>
  <div class="skeleton-wrap">
    <svg
      role="img"
      width="100%"
      height="724"
      aria-labelledby="loading-aria"
      viewBox="0 0 400 724"
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
          <rect x="10" y="5" rx="5" ry="5" width="100" height="21" />
          <rect x="15" y="39" rx="0" ry="0" width="40" height="40" />
          <rect x="66" y="49" rx="5" ry="5" width="226" height="19" />
          <rect x="370" y="81" rx="0" ry="0" width="21" height="25" />
          <rect x="370" y="115" rx="0" ry="0" width="21" height="25" />
          <rect x="371" y="149" rx="0" ry="0" width="21" height="25" />
          <rect x="371" y="183" rx="0" ry="0" width="21" height="25" />
          <rect x="371" y="217" rx="0" ry="0" width="21" height="25" />
          <rect x="371" y="251" rx="0" ry="0" width="21" height="25" />
          <rect x="372" y="285" rx="0" ry="0" width="21" height="25" />
          <rect x="372" y="319" rx="0" ry="0" width="21" height="25" />
          <rect x="15" y="86" rx="0" ry="0" width="40" height="40" />
          <rect x="66" y="96" rx="5" ry="5" width="226" height="19" />
          <rect x="15" y="134" rx="0" ry="0" width="40" height="40" />
          <rect x="66" y="144" rx="5" ry="5" width="226" height="19" />
          <rect x="15" y="181" rx="0" ry="0" width="40" height="40" />
          <rect x="66" y="191" rx="5" ry="5" width="226" height="19" />
          <rect x="15" y="229" rx="0" ry="0" width="40" height="40" />
          <rect x="66" y="239" rx="5" ry="5" width="226" height="19" />
          <rect x="15" y="276" rx="0" ry="0" width="40" height="40" />
          <rect x="66" y="286" rx="5" ry="5" width="226" height="19" />
          <rect x="15" y="324" rx="0" ry="0" width="40" height="40" />
          <rect x="66" y="334" rx="5" ry="5" width="226" height="19" />
          <rect x="15" y="371" rx="0" ry="0" width="40" height="40" />
          <rect x="66" y="381" rx="5" ry="5" width="226" height="19" />
          <rect x="15" y="419" rx="0" ry="0" width="40" height="40" />
          <rect x="66" y="429" rx="5" ry="5" width="226" height="19" />
          <rect x="15" y="467" rx="0" ry="0" width="40" height="40" />
          <rect x="66" y="477" rx="5" ry="5" width="226" height="19" />
          <rect x="15" y="514" rx="0" ry="0" width="40" height="40" />
          <rect x="66" y="524" rx="5" ry="5" width="226" height="19" />
          <rect x="15" y="562" rx="0" ry="0" width="40" height="40" />
          <rect x="66" y="572" rx="5" ry="5" width="226" height="19" />
          <rect x="15" y="609" rx="0" ry="0" width="40" height="40" />
          <rect x="66" y="619" rx="5" ry="5" width="226" height="19" />
          <rect x="373" y="349" rx="0" ry="0" width="21" height="25" />
          <rect x="373" y="383" rx="0" ry="0" width="21" height="25" />
          <rect x="373" y="417" rx="0" ry="0" width="21" height="25" />
          <rect x="15" y="656" rx="0" ry="0" width="40" height="40" />
          <rect x="66" y="666" rx="5" ry="5" width="226" height="19" />
          <rect x="15" y="704" rx="0" ry="0" width="40" height="40" />
          <rect x="66" y="714" rx="5" ry="5" width="226" height="19" />
          <rect x="15" y="751" rx="0" ry="0" width="40" height="40" />
          <rect x="66" y="761" rx="5" ry="5" width="226" height="19" />
          <rect x="373" y="453" rx="0" ry="0" width="21" height="25" />
          <rect x="374" y="487" rx="0" ry="0" width="21" height="25" />
          <rect x="374" y="521" rx="0" ry="0" width="21" height="25" />
          <rect x="375" y="551" rx="0" ry="0" width="21" height="25" />
          <rect x="375" y="585" rx="0" ry="0" width="21" height="25" />
          <rect x="375" y="619" rx="0" ry="0" width="21" height="25" />
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
  name: 'SkeletonSinger',
  components: {
    // TopListSvg,
    Loading
  }
}
</script>
