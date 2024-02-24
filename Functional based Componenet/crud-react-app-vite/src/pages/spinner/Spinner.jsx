const Spinner = () => {
    window.addEventListener("DOMContentLoaded",() => {
        const gpr = new GlassProgressRing(".pl");
        const replayBtn = document.querySelector("#replay");
    
        replayBtn?.addEventListener("click",gpr.replay.bind(gpr));
    });
    
    class GlassProgressRing {
        complete = false;
        percent = 0;
        startTime = 600;
        timeout = null;
    
        constructor(el) {
            this.el = document.querySelector(el);
    
            this.init();
        }
        init() {
            this.toggleComplete();
            this.progressDisplay();
            this.timeout = setTimeout(this.loop.bind(this),this.startTime);
        }
        loop() {
            if (!this.complete) {
                this.progressInc();
                this.timeout = setTimeout(this.loop.bind(this),17);
            }
        }
        progressDisplay() {
            this.el?.style.setProperty("--percent",this.percent);
    
            const percentText = `${Math.round(this.percent * 100)}%`;
            const percentEl = this.el?.querySelector("[data-percent]");
    
            if (percentEl) percentEl.innerHTML = percentText;
        }
        progressInc(amount = 0.01) {
            if (this.percent < 1) {
                this.percent += amount;
                this.percent = +this.percent.toFixed(2);
            }
            if (this.percent >= 1) {
                this.percent = 1;
                this.complete = true;
                this.toggleComplete();
            }
            this.progressDisplay();
        }
        replay() {
            if (this.complete) {
                this.complete = false;
                this.percent = 0;
                this.init();
            }
        }
        toggleComplete() {
            this.el?.setAttribute("data-complete",this.complete);
        }
    }


  return (
    <div className="spinner-wrapper">
    <main>

	<svg class="pl" viewBox="0 0 270 270" width="270px" height="270px" role="img" aria-labelledby="pl-percent">
		<defs>
			<radialGradient id="glass1" r="1">
				<stop stop-color="hsla(0,0%,100%,0.05)" offset="0.4" />
				<stop stop-color="hsla(0,0%,100%,0.35)" offset="1" />
			</radialGradient>
			<linearGradient id="glass2" x1="0" y1="0" x2="0.75" y2="1">
				<stop stop-color="hsla(0,0%,100%,0.3)" offset="0" />
				<stop stop-color="hsla(0,0%,100%,0.08)" offset="1" />
			</linearGradient>
			<linearGradient id="glass3" x1="0" y1="0" x2="0" y2="1">
				<stop stop-color="hsla(0,0%,100%,0.3)" offset="0" />
				<stop stop-color="hsla(0,0%,100%,0)" offset="0.5" />
			</linearGradient>
			<linearGradient id="glass4" x1="0" y1="0" x2="0" y2="1">
				<stop stop-color="hsla(0,0%,100%,0)" offset="0.6" />
				<stop stop-color="hsla(0,0%,100%,0.3)" offset="1" />
			</linearGradient>
			<radialGradient id="glass5" r="1">
				<stop stop-color="hsla(0,0%,0%,0.2)" offset="0.45" />
				<stop stop-color="hsla(0,0%,0%,0)" offset="0.55" />
			</radialGradient>
			<linearGradient id="glass6" x1="0" y1="0" x2="0" y2="1">
				<stop stop-color="hsla(0,0%,100%,0.15)" offset="0" />
				<stop stop-color="hsla(0,0%,100%,0)" offset="0.3" />
			</linearGradient>
			<linearGradient id="glass7" x1="0" y1="0" x2="0" y2="1">
				<stop stop-color="hsla(0,0%,100%,0)" offset="0.7" />
				<stop stop-color="hsla(0,0%,100%,0.1)" offset="1" />
			</linearGradient>
			<clipPath id="glass8">
				<circle cx="135" cy="135" r="125" />
			</clipPath>
			<filter id="glass-glow">
				<feGaussianBlur in="SourceGraphic" stdDeviation="5" />
			</filter>
			<filter id="glass2-blur">
				<feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
			</filter>
		</defs>
		<g fill="none">
			<g transform="rotate(-90,135,135)">
				<circle class="pl__ring" r="105" cx="135" cy="135" stroke-dasharray="659.74 659.74" stroke-dashoffset="659.74" stroke-width="40" />
				<g filter="url(#glass-glow)" stroke-linecap="round" stroke-width="4" opacity="0.6">
					<circle class="pl__ring-glow1" r="80" cx="135" cy="135" stroke-dasharray="502.66 502.66" stroke-dashoffset="502.66" />
					<circle class="pl__ring-glow2" r="130" cx="135" cy="135" stroke-dasharray="816.82 816.82" stroke-dashoffset="816.82" />
				</g>
			</g>
			<circle stroke="url(#glass1)" stroke-width="40" r="105" cx="135" cy="135" />
			<circle filter="url(#glass2-blur)" stroke="url(#glass2)" stroke-width="9" r="105" cx="135" cy="135" />
			<circle stroke="url(#glass3)" stroke-width="1" r="109" cx="135" cy="135" />
			<circle stroke="url(#glass4)" stroke-width="1" r="101" cx="135" cy="135" />
			<circle stroke="url(#glass5)" stroke-width="14" r="92" cx="135" cy="135" />
			<circle stroke="url(#glass6)" stroke-width="2" r="86" cx="135" cy="135" />
			<circle stroke="url(#glass7)" stroke-width="4" r="87" cx="135" cy="135" />
			<circle clip-path="url(#glass8)" stroke="hsla(var(--hue),90%,10%,0.1)" stroke-width="4" r="125" cx="135" cy="142" />
		</g>
		<text id="pl-percent" fill="currentcolor" font-size="48" text-anchor="middle" x="135" y="151" data-percent></text>
	</svg>
	<button id="replay" class="btn" type="button" title="Replay">
		<svg class="btn__icon" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true">
			<path d="M5 13C5 16.866 8.13401 20 12 20C15.866 20 19 16.866 19 13C19 9.13401 15.866 6 12 6H7M7 6L10 3M7 6L10 9" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	</button>
</main>
</div>
  )
}

export default Spinner