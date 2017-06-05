

			Reveal.initialize({
				width: SLConfig.deck.width,
				height: SLConfig.deck.height,
				margin: 0.05,

				controls: true,
				progress: true,
				history: true,
				mouseWheel: false,
				showNotes: SLConfig.deck.share_notes ? 'separate-page' : false,
				slideNumber: SLConfig.deck.slide_number,

				autoSlide: SLConfig.deck.auto_slide_interval || 0,
				autoSlideStoppable: true,

				rollingLinks: false,
				center: SLConfig.deck.center || false,
				loop: SLConfig.deck.should_loop || false,
				rtl: SLConfig.deck.rtl || false,

				transition: SLConfig.deck.transition,
				backgroundTransition: SLConfig.deck.background_transition,

				pdfMaxPagesPerSlide: 1,
				pdfPageHeightOffset: 0
			});

			if( window.hljs ) hljs.initHighlightingOnLoad();
