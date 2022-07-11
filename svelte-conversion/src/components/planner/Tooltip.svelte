<script lang="ts">
  import { parsedBuildData, activeProfile } from "../../stores/build_data";
  import { getItemIconURL } from "../../lib/maxroll_endpoints";
  import { getItemGlowSize } from "../../lib/glowSize";

  export let selectedSlot: string;

  const items = $parsedBuildData.profiles[$activeProfile].items;
</script>

<div class="tooltip">
  <div class="tooltip-container">
    <div class="tooltip-container-outer">
      <div class="tooltip-container-inner">
        <div class="tooltip-item-container">
          <div class="tooltip-container-inner">
            <div class="tooltip-border left" />
            <div class="tooltip-border right" />
            <div class="tooltip-border top" />
            <div class="tooltip-border bottom" />
            <div class="tooltip-border top-left" />
            <div class="tooltip-border top-right" />
            <div class="tooltip-border bottom-left" />
            <div class="tooltip-border bottom-right" />
            <div class="tooltip-header">
              <span class="text-legendary">
                {items[selectedSlot].generalData.name}</span
              >
            </div>
            <div class="tooltip-body">
              <div
                class="tooltip-item-icon item-gradient-{items[selectedSlot]
                  .generalData.quality}-{getItemGlowSize(selectedSlot)}"
              >
                <div class="item-gradient">
                  <img
                    class="tooltip-item-icon-inner"
                    alt="item-icon"
                    src={getItemIconURL(items[selectedSlot].generalData.iconID)}
                  />
                </div>
              </div>
              <div class="tooltip-item-properties">
                <div class="item-slot">
                  {items[selectedSlot].generalData.displaySlot}
                </div>
                <div class="item-type text-legendary">
                  {items[selectedSlot].generalData.displayQuality}
                </div>
                <div class="item-value">
                  {#if items[selectedSlot].stats.dps}
                    <div class="value">{items[selectedSlot].stats.dps}</div>
                  {:else if items[selectedSlot].stats.basearmor}
                    <div class="value">
                      {items[selectedSlot].stats.basearmor}
                    </div>
                  {/if}
                  <div class="item-subtype">
                    {items[selectedSlot].generalData.baseStatType}
                  </div>
                </div>
                <div class="item-stats">
                  <!-- TODO: Need to add socket stats -->
                </div>
              </div>
            </div>
            <div class="tooltip-footer">
              <div class="flavor">
                Sample flavor text. {console.log(items[selectedSlot])}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .tooltip-border.left {
    width: 20px;
    height: 100%;
    left: -20px;
    background-image: url("https://planner-assets.com/d3planner/static/media/Ancient-Frame-LeftBorder-2.png?07772d24=");
  }

  .tooltip-border.right {
    width: 20px;
    height: 100%;
    right: -20px;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABAlBMVEUAAAB8Qgl1QwoAAAAAAABzQQmHTRJ1QguJUBV4RQ6GTBN6SA6CRw55Rw1/RAp5RgyBRgx4RQyDSA90QwuCSBBxQAqBSA90QguESxF6RwyHTRN8SQ16Rw2ITxSLUhV8SQ95RQ5yPwt/Rw1wPgklGAfRhxpxOgsjFwbOhBhzPA2ARg0iFgbLgRZ0PQ7KgBVyOwwkFwdvNwkmGQjNgxZsNAYpGwnPhRhrMwUrHQsrHgtxOQrGfBR1PQ4qHArFexRxOQsoGgnHfRVrMwbKgBZtNQcqHAtzOwvKfxZ0PQ0mGQnHfBQgFQXIfRRqMgUeFATLgRQhFgbNhBaFTBHOhBdsNAcAAACmNg14AAAAJHRSTlMA+8kxAr/7t/u4+7j7uPu4+7j7t/u2+7f7uPu5uPv8ubi/+7YYwQZRAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAJFJREFUGNNlzscawVAYhOGjE70TJEr0I4SI3iJ6L/d/Ldbm/5bvM4thSrVmszuc7K96o9lyMajNO24PQbXr9SH2VE3wI/YHeiCIODRGoTDi2NAjUcQJn8biZDmbJ5KIi+UqlUZcb8xMluDWEnOIO74X8wQPR4FcOp21AllerjdJRrw/TKmI+HxZ7xKi8vmWK2A/n5YRFSWM1I4AAAAASUVORK5CYII=");
  }

  .tooltip-border.top {
    background-position: 50%;
    width: 100%;
    height: 22px;
    top: -22px;
    background-image: url("data:image/png;base64,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");
  }

  .tooltip-border.bottom {
    background-position: 50%;
    width: 100%;
    height: 26px;
    bottom: -26px;
    background-image: url("https://planner-assets.com/d3planner/static/media/Ancient-Frame-BottomBorder-2.png?7748a476=");
  }

  .tooltip-border.top-left {
    background-position: 50%;
    width: 26px;
    height: 26px;
    top: -5px;
    left: -10px;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAfCAYAAAD0ma06AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAD0UlEQVRIx7WVu29cRRTGv3Nm7r27e3e9ju3EWHkhhHAEQVEUJaGhQRFCPINkEkEJJFRUNClQ/ggqGjr+A0SBkChCEUBBQpZ4Rnk4Jn6Q9dr7vK+Zc2hSQOwb5LA70jSjme+nT+d8Z3D+ZHj+8tn4IwATAAzGvMzWUJbfOBa9/8zh4Pj1ddcZpBgAyMYG7KXIbq+5314+WnnzlRO15wcZopt/uQzAEEA+ciAAtIbaSvpen561l186UTl9cNoc6KWyf60jHQCbAGSkQAVwpyM31zaKfF/Mr754LH5qfn84u2/CPCni51c7ugGgCWD6/p551E3/pEcWB07O8cdnnq18sPDCpK/XbLK4nGXf33W3DWk/7TjPAZtqPbAucwQCjGUOa0TVumViJfGqUEUQMtvAkC88CufFMBMxgR603Ixw5sgUXXjrufjcxYVZWOuRechm38tmO5PCgSqxISZBNbKoRgYKolwErnCkArXWwARKkw3DldAgTb0CUBvw9hh4xZ1eTnP32p6okIMzU2w7XaUoMjw3E5lGbA0V4AobDgLL3gt3exkbUZ5q1IlgOOnnvKcS0NKqpqstzWfiMHSZEokh+yDQCVwn16srPTnd7aTy4/UA3/1iEbFDv3CYnYxxZK6OiZrBxrDAVpKjWTXoJzk2kgHWWylCRm8r9/3lzaT9+2qeDFINAwMmELYBAUAVXA2oUa8H1b2xxeqGR2coePxQHSuZ/ezrK61P+0muRaEQJUzGBrPN8NKhuizkA4/qVKPxzU+bXy3dG14U/bf2jkAA9tThyvGKJTSrjMkJYGCxurjSvXD15/aXOz0ILb9z9tQMPnztiYVLn9/6Y6mVvCeK7jbhsrjsnbQzRA7tLYejh5r49srd139d6l8ry1fupPji2sbbP9zo9f5spZ+IaHene6VA750oMbJc8NhUiK2++89xl+Te3V5P3n3YHS47d05AxFAo0sJDRjRr+CHnxAQYw/BeQdDd6O4aSFAgywR5JlBx8DpmoBLBMqEQRS8poDJeICBCUWQBS1BjYA3vQvYRgEFoUQgwTHNMNwxqFbsb3dJVqmICQpo6qPGIIwXTbmQfwaGIwADwXtDrZRA/ZmDEYOcBQ4Sq9ahFo7FYCgwDg3a/wPzBCcSNEP3UjQRYWkNWhRNAhLC41EPhRjNqSoHihUiBW2sJRAA7oq4pr2HI7IVAXrCnxrBmNMBSh17glQxHoUGsDBp3LG60/fp6t4D3Au89imI0uSjv0tDc/yAUIILomJvGOVFShbUGFWMQWAPg/7ssdTgYeiElBAZgAnhEXfo3PpjNtBkIZX4AAAAASUVORK5CYII=");
  }

  .tooltip-border.top-right {
    background-position: 50%;
    width: 26px;
    height: 26px;
    top: -5px;
    right: -10px;
    background-image: url("https://planner-assets.com/d3planner/static/media/Ancient-Frame-TopRightBorder-2.png?7de554c5=");
  }

  .tooltip-border.bottom-left {
    background-position: 50%;
    width: 26px;
    height: 26px;
    bottom: -7px;
    left: -10px;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAfCAYAAAD0ma06AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAADr0lEQVRIx7WWTW9VVRSGn7X3+bjn9Lb0Bi5QaK0SwodthJDGNNEJJNaJJJqgcaA4c2ic4MDIL9Af4B9wpBNjdCBKbEiMDpoq1mj9gkAwQKH0895zzzl7Lwe9KhJuJfTeNd0n6znvWu9aewv3j9HTT6YXqoEZOfFEzK0C3v1kld9v5sIWw3Q8sCLWGpANhm6V9L9AMSCg6rFGiMKgK8COWfKi1MhDnoOYmDCwvVWoijrnQaFwnmar6K3CNJSwohv9E1GseeCcD6fQg2JAafewSyXtqDAyMrhnEOr1AUqpcfX2fG+BaSTRzlqFLC+4vrRGJbRAuWVgx5KKDVy1GrO40mStWZBEPS6piGF9vUUpStoXY+2Wl8zmClU93ineK30Vg+mSSzsqLPKSMIqII6HlDXnZneXWWSGAOpJKhcWVkkZr64bZFBjFAc6D9Z7EgtceKwTBOQWvpJUQa3psGlc6rBXEgBiDSHdc03m1OQ8C3ilhaHt/Hwah1TwvKZ0lEkP4gHNvRKKHAWoYGmOMoS8NuHwjY3t/SH8anDVGOo7S9v7w8afHBuerFftsp286/ffA/nrw2nDN9A3vjDn3Q4bagH170uNZ6aec02+MoTRGksBK0pcESRLZsZcnd5w7c3Jo7x8L+anLC9mMV367N3En6w0/ta/y8UsT8bHhoYQPLyhrTU+9HhOlMTeWm2R5QbPlcV7ZVYvojw0D5CwvNzjw2A6+/Hk1Oz935xVg9j+tuh8tDWEwxuypR9hYGB0ybIssWZFRTeH4aMpAErCUFdxuZETicJTkpsKtRcW6VU4eTSurzfyj60sFSWxwThHpoPDIUPD6qaPJO2P7oxERpSiE2oBlsN/SapWsrDrAoHhapdJo5MSRZaA/IS89a+s52/oC4jCgdIox4H0H4LG9watTh5K3DwzFh2Z+WqaaCrt3BFgrWMvGEhdwqoRiMO2FUJaQ5Q4xShAElIXDGggDg6qCCKL3ACdHwxcnR+xbj9bsxO2GJXd51hTJFltkXtWAWDZeqqJo2wLtLCr/KlBQtH16F0Lu6uH4rnDqucPJmW2pn1h3rPlQWzdKOzv9Y3b+0oKbbzvatkfJbGK4TSMAqMUy/vyR6I2Ruhm/tqI3Z/7U6fnrrWtzV/MPgBm69/AmGK3JI2+eSM9OjqXPfHEx+/Tz+dbs178Uc87rV8CdboH+AY7vDl+YOFw5+P509t73V1pXvruUTwO/Aq7bMACZOlg9HcTefXax8S2wACz3AvR3/AUImmZomzjkegAAAABJRU5ErkJggg==");
  }

  .tooltip-border.bottom-right {
    background-position: 50%;
    width: 26px;
    height: 26px;
    bottom: -8px;
    right: -9px;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAfCAYAAAD0ma06AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAD0ElEQVRIx7WWz4scRRTHP6+quqdnejezP7ObmGDARLNhxYBIxBgRAhEhHjwIiv+CEBG8Cl68CqKeFD0pHrwI3gQhinqKIYIkhhgyhsQ12V0286O3u6vreZhdUTMJCfS8pujLq/7Uq+/70VCTPbwrOXf2nV362uOxvnVionzj2dYZ4E0g/refqQuogAiICM2kQQjoKL/agMYYysJjrSVyDlUFOA9U4wEKiDEgEDnHRCuOgD/GBlQdLoCiKMQ5kVF+rj6g4v1QuFvdnm6q8WMFWiOoBoIGnLVuNrHzo/zq09AaGokDDTjnsGb0t2sDVpXibIQAAaEKGsYKzHJPf+CJrKHMc70TsDYN8zLQy0rSpsNao0UVRiZNbRHmXskKZSI1IEYHuebjBZZKFQxxpJRlpXmpxViBPiiREUSVKkAZKMcKFAErQkARARUZb5ZGVtCtR0B9+G8PrR0YW8HIcCmQFeH+r9SITN8r0FnBmKGWxoikiY3g9pl4R+BEYl8+tjy1NjsZvXsXTgOYBqZXNkpbBYuRAAG8yuYo4MjCd1Z2P31wxwdvv7SXT7+98frnP96UAO/lRYUynH3WmnSuHX+x/ODkki8DuxPLZGqIbIwYp1mWFfcKlGeWpj8+9lA68+GXF2lPtXjxyPypbhFO/bleYEVoNgxJHLEw3aLo5axsDOirYX1QEUcWX3n1IXjgtkx1+xcaCooxhqwILE5FvHC4Rd7vs2dPyvxsg4YWiFpybTHbbDDTiulmJZ3VnJ7NeWRnwq1NJatKIlWCDxihGhnh+69OIgKGYQ05Z8iLjI00MJE6Iuu51S0YbHpmUkdi+1gsU63A4qwlaUT44IljodmIuOoDl1e8djd1ALeXhvv9Wsb2v4ARKLziA8SR5cZaD++VODZEzpBvBMCjYXg4gBAUVFici0hiS44yPxeF7uW8O92UQ+uZXgL+aeTu+05Y1zDcLFs1ZADFg7B1mArdnjaCEoZvgaBQiRBmbuSJy6pGXmi6vL/deGJvtBQ76Z+9Vq2vDqrvtqN1n/2QfX2vtbaliW5t9kAJFECxb94uPLcUH1jYIcudlTw82JajU2nDl1rePH2pug5cBILcB+xuZoCT+xfd8ScPNCdbVO2DO83x1Ll2Z9V/9clP/Y+u9fQMcN3WBFTgt7VeGJzrFH95kTxXd6nd1AcOLdjHjuwzM9+cL097xdcF3LYO4FY2qtVfr5bnCvTnXfNR9tSj6fOTVvv9zXChbiDAytYVc+VmdaWzrp2ra/rLK0dbJy90io26NPy/CbDIsNcWQHliKT0813QTfwPVrsNesTCv6gAAAABJRU5ErkJggg==");
  }

  .tooltip-header {
    width: 320px;
    height: 40px;
    padding: 0 15px;
    background-repeat: no-repeat;
    font: 22px "Palation Linotype", "Times", serif;
    line-height: 37px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    background-image: url("https://planner-assets.com/d3planner/static/media/tooltip-title.jpg?0570b75b=");
  }

  .tooltip-border {
    position: absolute;
    display: block;
    z-index: 900;
    background-repeat: repeat-y;
  }

  .tooltip-body {
    position: relative;
    padding: 10px;
  }

  .tooltip-footer {
    margin: 10px -2px 0;
    padding: 10px 12px;
    border-top: 2px solid #322a20;
  }

  .tooltip {
    position: relative;
    margin: 10px 0 0 28px;
  }

  .tooltip * {
    box-sizing: content-box;
  }

  .tooltip-container {
    position: absolute;
  }

  .tooltip-container-outer {
    position: relative;
    display: inline-block;
    vertical-align: top;
    background: #1d180e;
    padding: 1px;
    border: 1px solid #322a20;
    max-width: 354px;
    z-index: 10000000;
    border-radius: 2px;
    box-shadow: 0 0 10px #000;
  }

  .tooltip-container-inner {
    background: #000;
  }

  .tooltip-item-container {
    padding: 2px;
    font: normal 12px/1.5 Arial, sans-serif;
    color: #c7b377;
  }

  .item-gradient {
    display: block;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.45), transparent);
  }

  .tooltip-item-icon {
    float: left;
    margin-right: 10px;
    margin-bottom: 11px;
    background-repeat: no-repeat;
    border: 1px solid;
    border-color: #533f24;
  }

  .tooltip-item-icon-inner {
    display: block;
    padding: 1px;
    background: no-repeat 50%;
    font-size: 1px;
    line-height: normal;
    text-align: center;
    overflow: hidden;
  }

  .tooltip-item-properties > .item-slot {
    float: right;
    text-align: right;
    color: #909090;
    margin: 1px 0;
  }

  .tooltip-item-properties > .item-type {
    margin: 1px 0;
  }

  .item-value {
    text-shadow: 0 0 5px #000, 0 0 5px #000, 0 0 5px #000;
    clear: right;
    margin: 10px 0 0 0;
  }

  .item-value > .value {
    color: #fff;
    font-size: 400%;
    line-height: 100%;
    font-family: "Palatino Linotype", "Times", serif;
    text-shadow: 0 0 5px #000, 0 0 5px #000, 0 0 5px #000;
  }
  .item-value > .item-subtype {
    color: #909090;
  }

  .item-value > div {
    margin: 1px 0;
  }

  .item-stats {
    margin-top: 10px;
    clear: both;
  }

  .item-category {
    padding-top: 6px;
    color: #fff;
  }

  .item-stats > .item-stat {
    padding-left: 16px;
    margin: 1px 0;
    background: url("data:image/gif;base64,R0lGODlhDAAMANUpAAAAACkkISEcGCEcGSwnIysiHykjIUI0MUQ6My4oJiwmIh0aFx8aGS0kICYkIUI4MRsWFSwoIxsYFzIqJSIdGRsYFRoXFSYjISgjIRgWFEM5MhwZFyMeGlFFQUhAOCEdGx8aFywmIUpAORkVE0g/Ny0jIB8bGR4ZFx4cGSUgFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMzc4NEQ4MkI5RUQxMUUzODVDNUM0QjVDMEZCQTEzOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMzc4NEQ4M0I5RUQxMUUzODVDNUM0QjVDMEZCQTEzOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQzNzg0RDgwQjlFRDExRTM4NUM1QzRCNUMwRkJBMTM4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzNzg0RDgxQjlFRDExRTM4NUM1QzRCNUMwRkJBMTM4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAKQAsAAAAAAwADABABlLAlDAFKAKGwqJlICAoOEUigBEIGDykRykqXTgODS4A8hGYIwlCYHNMAjInLrIoKcilKCtCM4kCQAEXGAEdIggHdkUVA4xpCiZiACMCIRR3bndBADs=")
      0 3px no-repeat;
  }

  .item-stats > .item-stat > .value {
    color: #6969ff;
  }
  .item-stats > .item-stat > .priority {
    color: #bda6db;
  }

  .tooltip-footer > .flavor {
    font-size: 16px;
    color: #ad835a;
    font-family: "Palatino Linotype", "Times", serif;
    font-style: italic;
  }

  .text-legendary {
    color: #bf642f;
  }

  .text-set {
    color: #0f0;
  }

  .text-rare {
    color: #ff0;
  }

  .text-magic {
    color: #6969ff;
  }

  .item-gradient-magic-small {
    background-size: 100% 100%;
    width: inherit;
    height: inherit;
    box-sizing: content-box;
    background-image: url("data:image/png;base64,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");
  }

  .item-gradient-rare-large {
    background-size: 100% 100%;
    width: inherit;
    height: inherit;
    box-sizing: content-box;
    background-image: url("https://d3planner-assets.maxroll.gg/d3planner/static/media/gradient_large_rare.png");
  }

  .item-gradient-rare-small {
    background-size: 100% 100%;
    width: inherit;
    height: inherit;
    box-sizing: content-box;
    background-image: url("data:image/png;base64,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");
  }

  .item-gradient-legendary-large {
    background-size: 100% 100%;
    width: inherit;
    height: inherit;
    box-sizing: content-box;
    background-image: url("https://d3planner-assets.maxroll.gg/d3planner/static/media/gradient_large_legendary.png");
  }

  .item-gradient-legendary-small {
    background-size: 100% 100%;
    width: inherit;
    height: inherit;
    box-sizing: content-box;
    background-image: url("data:image/png;base64,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");
  }

  .item-gradient-set-large {
    background-size: 100% 100%;
    width: inherit;
    height: inherit;
    box-sizing: content-box;
    background-image: url("https://d3planner-assets.maxroll.gg/d3planner/static/media/gradient_large_set.png");
  }

  .item-gradient-set-small {
    background-size: 100% 100%;
    width: inherit;
    height: inherit;
    box-sizing: content-box;
    background-image: url("data:image/png;base64,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");
  }

  .item-gradient-ethereal-large {
    background-size: 100% 100%;
    width: inherit;
    height: inherit;
    box-sizing: content-box;
    background-image: url("https://d3planner-assets.maxroll.gg/d3planner/static/media/gradient_large_ethereal.png");
  }
</style>
