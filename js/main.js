// IIFE -> not to refer to the varaibles from anywhere
(() => {
	// amount of img have to be decied previously.

	const IMG_COUNT = {
		scene1: 300,
		scene2: 960,
		scene4: 2,
	};

	const sceneArr = [
		// Scene 1
		{
			type: 'sticky',
			heightSize: 0,
			heightMultiple: 5,
			objs: {
				container: document.querySelector('#section__1'),
				messageA: document.querySelector('#section__1 .main-message.a'),
				messageB: document.querySelector('#section__1 .main-message.b'),
				messageC: document.querySelector('#section__1 .main-message.c'),
				messageD: document.querySelector('#section__1 .main-message.d'),
				canvas: document.querySelector('#section__1 .section__1-canvas'),
				canvasContext: document
					.querySelector('#section__1 .section__1-canvas')
					.getContext('2d'),
			},
			values: {
				imgs: [],
				messageA__opacity__in: [
					0,
					1,
					{
						start: 0.15,
						end: 0.2,
					},
				],
				messageA__translateY__in: [
					-20,
					0,
					{
						start: 0.15,
						end: 0.2,
					},
				],
				messageA__opacity__out: [
					1,
					0,
					{
						start: 0.25,
						end: 0.3,
					},
				],
				messageA__translateY__out: [
					0,
					10,
					{
						start: 0.25,
						end: 0.3,
					},
				],
				messageB__opacity__in: [
					0,
					1,
					{
						start: 0.35,
						end: 0.5,
					},
				],
				messageB__translateY__in: [
					-20,
					0,
					{
						start: 0.35,
						end: 0.5,
					},
				],
				messageB__opacity__out: [
					1,
					0,
					{
						start: 0.55,
						end: 0.6,
					},
				],
				messageB__translateY__out: [
					0,
					10,
					{
						start: 0.55,
						end: 0.6,
					},
				],

				// Message C 0.6 ~ 0.7(Start) 0.75 ~ 0.8(End)
				messageC__opacity__in: [
					0,
					1,
					{
						start: 0.6,
						end: 0.7,
					},
				],
				messageC__translateY__in: [
					-20,
					0,
					{
						start: 0.6,
						end: 0.7,
					},
				],
				messageC__opacity__out: [
					1,
					0,
					{
						start: 0.75,
						end: 0.8,
					},
				],
				messageC__translateY__out: [
					0,
					10,
					{
						start: 0.75,
						end: 0.8,
					},
				],

				// MessageD 0.8 ~ 0.9(Start) 0.95 ~ 1(End)
				messageD__opacity__in: [
					0,
					1,
					{
						start: 0.8,
						end: 0.9,
					},
				],
				messageD__translateY__in: [
					-20,
					0,
					{
						start: 0.8,
						end: 0.9,
					},
				],
				messageD__opacity__out: [
					1,
					0,
					{
						start: 0.95,
						end: 1,
					},
				],
				messageD__translateY__out: [
					0,
					10,
					{
						start: 0.95,
						end: 1,
					},
				],
				canvas__opacity__in: [0, 1, { start: 0, end: 0.1 }],
				canvas__opacity__out: [1, 0, { start: 0.9, end: 1 }],
			},
		},
		{
			// Scene 2
			type: 'normal',
			heightSize: 0,
			heightMultiple: 2,
			objs: {
				container: document.querySelector('#section__2'),
			},
		},
		{
			// Scene 3
			type: 'sticky',
			heightSize: 0,
			heightMultiple: 5,
			objs: {
				container: document.querySelector('#section__3'),
				messageM: document.querySelector('#section__3 .sticky__main'),
				messageA: document.querySelector('#section__3 .sticky__sub.a'),
				messageB: document.querySelector('#section__3 .sticky__sub.b'),
				canvas: document.querySelector('#section__3 .section3-canvas'),
				canvasContext: document
					.querySelector('#section__3 .section3-canvas')
					.getContext('2d'),
			},
			values: {
				// Scroll Interaction Imgs
				imgs: [],
				img_swap_point: 0,
				// Sticky effect valus
				canvas__opacity__in: [
					0,
					1,
					{
						start: 0,
						end: 0.1,
					},
				],
				canvas__opacity__out: [
					1,
					0,
					{
						start: 0.9,
						end: 1,
					},
				],
				// messageM(0.1 ~ 0.3)
				messageM__opacity__in: [
					0,
					1,
					{
						start: 0.1,
						end: 0.15,
					},
				],
				messageM__opacity__out: [
					1,
					0,
					{
						start: 0.25,
						end: 0.3,
					},
				],
				messageM__translateY__in: [
					40,
					0,
					{
						start: 0.1,
						end: 0.15,
					},
				],
				messageM__translateY__out: [
					0,
					-30,
					{
						start: 0.25,
						end: 0.3,
					},
				],

				// messageA (0.4 ~ 0.6)
				messageA__opacity__in: [
					0,
					1,
					{
						start: 0.4,
						end: 0.45,
					},
				],
				messageA__opacity__out: [
					1,
					0,
					{
						start: 0.55,
						end: 0.6,
					},
				],
				messageA__translateY__in: [
					40,
					0,
					{
						start: 0.4,
						end: 0.45,
					},
				],
				messageA__translateY__out: [
					0,
					-30,
					{
						start: 0.55,
						end: 0.6,
					},
				],

				// messageB(0.7 ~ 0.9)
				messageB__opacity__in: [
					0,
					1,
					{
						start: 0.7,
						end: 0.75,
					},
				],
				messageB__opacity__out: [
					1,
					0,
					{
						start: 0.85,
						end: 0.9,
					},
				],
				messageB__translateY__in: [
					40,
					0,
					{
						start: 0.7,
						end: 0.75,
					},
				],
				messageB__translateY__out: [
					0,
					-30,
					{
						start: 0.85,
						end: 0.9,
					},
				],
			},
		},
		{
			// Scene 4 - sceneArr[3]
			type: 'sticky',
			heightSize: 0,
			heightMultiple: 5,
			objs: {
				container: document.querySelector('#section__4'),
				canvas: document.querySelector('#section__4 .section4-canvas'),
				canvasContext: document
					.querySelector('#section__4 .section4-canvas')
					.getContext('2d'),
				caption: document.querySelector('#section__4 .non_caption'),
			},
			values: {
				imgs: [],
				// canvas Scroll fillRect_ratio
				canvas_fill_left: [
					0,
					0,
					{
						start: 0,
						end: 0,
					},
				],
				canvas_fill_right: [
					0,
					0,
					{
						start: 0,
						end: 0,
					},
				],
				rect_size_W: 0,
				rect_size_H: 0,
				canvas_next_ypos: [
					0,
					0,
					{
						start: 0,
						end: 0,
					},
				],
				canvas_blend_ypos: [
					0,
					0,
					{
						start: 0,
						end: 0,
					},
				],
				canvas_scale_effect: [
					0,
					0,
					{
						start: 0,
						end: 0,
					},
				],
				caption_opacity: [0, 1, { start: 0, end: 0 }],
				caption_translateY: [20, -100, { start: 0, end: 0 }],
				canvas_fill_rect: 0,
				canvas_blend_top: 0,
				canvas_margin_top: 0,
				canvas_rect_space: 0,
			},
		},
	];

	// Global variables

	let prevSceneOffset = 0; // To check that which scene is on the screen
	let currentScene = 0; // To check the size of each section;
	let rafId = 0;
	let rafSt = false;
	let fixedOffsetY = 0;


	const checkMenu = () => {
		let scrollYOffset = window.scrollY;

		// Local_nav -> fixed effect
		const local_nav = document.querySelector('.container .local-nav');
		if (scrollYOffset > 44) {
			local_nav.classList.add('sticky-nav');
		} else {
			local_nav.classList.remove('sticky-nav');
		}
	};

	const setSize = () => {
		// setting the area of scrolling
		fixedOffsetY = scrollY;
		for (let i = 0; i < sceneArr.length; i++) {
			const sceneContainer = document.querySelector(`#section__${i + 1}`);
			sceneArr[i].heightSize = window.innerHeight * sceneArr[i].heightMultiple;
			sceneContainer.style.height = `${sceneArr[i].heightSize}px`;
		}
		// console.log(innerHeight);

		let scrollYOffset = window.scrollY;
		let pageHeight = 0;


		for (let i = 0; i < sceneArr.length; i++) {
			pageHeight += sceneArr[i].heightSize;
			if (scrollYOffset < pageHeight) {
				currentScene = i;
				break;
			}
		}
		document.body.setAttribute('id', `scene-show-${currentScene + 1}`);

		// Section4-canvas resizing
		// The canvasHeight size should be same size as the documentHeight.
		// and the canvasWidth size must be greater than the width size of the document.
		const reScaledWidth =
			document.body.offsetWidth / sceneArr[3].objs.canvas.width;
		const reScaledHeight = window.innerHeight / sceneArr[3].objs.canvas.height;

		let reScaledRatio;
		// if the Canvas is more flat than the browser (usually) => fit with height
		if (reScaledWidth <= reScaledHeight) reScaledRatio = reScaledHeight;
		// If the Canvas is more thinner than the browser (rarely) => fit with width
		else reScaledRatio = reScaledWidth;
		sceneArr[3].objs.canvas.style.transform = `scale(${reScaledRatio})`;

		// deciding the re_scaled width, height size of canvas
		// to match the value as re_sized 'canvas - width/height'
		// , the viewport(document) size also needs to be adjusted by multiplying the scale_ratio inversely.

		/* imagine -> if u apply the canvas_XPOS value to original viewport value, it won't work.
		this is because the canvas is resized to lower scale ratio.
		so if you apply the original value to the canvas XPOS value except to adjusting the ratio,
		the XPOS value will become to the lower scaled value.
		so you have to multiple the original XPOS value reversely and apply the value to variables. */

		const reSizedViewWidth = document.body.offsetWidth / reScaledRatio;
		const reSizedViewHeight = window.innerHeight / reScaledRatio;

		const reSizedSpace_W =
			sceneArr[3].objs.canvas.width -
			sceneArr[3].objs.canvas.width * reScaledRatio;
		const reSizedSpace_H =
			sceneArr[3].objs.canvas.height -
			sceneArr[3].objs.canvas.height * reScaledRatio;

		sceneArr[3].values.reSizedSpace_H = reSizedSpace_H / 2;
		// the scaleRatio should be lower more than 1

		const canvasOffY = sceneArr[3].objs.canvas.offsetTop + reSizedSpace_H / 2;

		// Viewport: Height -> innerHeight / Width -> body.offsetWidth

		const hiddenSqSize = (sceneArr[3].objs.canvas.width - reSizedViewWidth) / 2;

		sceneArr[3].values.hiddenSqSize = hiddenSqSize;
		const blockedSqSize = reSizedViewWidth / 5;

		const can_effect_st_ratio = canvasOffY / 2 / sceneArr[3].heightSize;
		const can_effect_end_ratio = canvasOffY / sceneArr[3].heightSize;

		// Setting canvas_fillRect__XPOS
		sceneArr[3].values.canvas_fill_left[0] = hiddenSqSize;
		sceneArr[3].values.canvas_fill_left[1] = hiddenSqSize - blockedSqSize;

		sceneArr[3].values.canvas_fill_right[0] =
			hiddenSqSize + reSizedViewWidth - blockedSqSize;
		sceneArr[3].values.canvas_fill_right[1] = hiddenSqSize + reSizedViewWidth;

		sceneArr[3].values.rect_size_W = blockedSqSize;
		sceneArr[3].values.rect_size_H = sceneArr[3].objs.canvas.height;

		// Setting blending IMGS start-end Ratio

		sceneArr[3].values.canvas_fill_left[2].start =
			sceneArr[3].values.canvas_fill_right[2].start = can_effect_st_ratio;
		sceneArr[3].values.canvas_fill_left[2].end =
			sceneArr[3].values.canvas_fill_right[2].end = can_effect_end_ratio;

		// Canvas_blend_effect -------------------------------------------------------
		const nextImg_effect_start_ratio = can_effect_end_ratio;
		const nextImg_effect_end_ratio =
			nextImg_effect_start_ratio + window.innerHeight / sceneArr[3].heightSize;

		// the point of changing IMG
		sceneArr[3].values.img_swap_point = can_effect_end_ratio;

		// deciding sticky -> top

		sceneArr[3].values.canvas_blend_top =
			(sceneArr[3].objs.canvas.height -
				sceneArr[3].objs.canvas.height * reScaledRatio) /
			2;

		// draw => dX, dY => sX, sY, sW(canvasWidth) sH(canvasHeight - dY)
		// dX === sX (0) / dY === sY (start: canvasHeight -> end: 0)
		sceneArr[3].values.canvas_fill_rect = sceneArr[3].objs.canvas.width;
		sceneArr[3].values.canvas_next_ypos[0] = sceneArr[3].objs.canvas.height;
		sceneArr[3].values.canvas_next_ypos[1] = 0;
		sceneArr[3].values.canvas_next_ypos[2].start = nextImg_effect_start_ratio;
		sceneArr[3].values.canvas_next_ypos[2].end = nextImg_effect_end_ratio;

		sceneArr[3].values.canvas_blend_ypos[0] = sceneArr[3].values.imgs[1].height;
		sceneArr[3].values.canvas_blend_ypos[1] = 0
		sceneArr[3].values.canvas_blend_ypos[2].start = nextImg_effect_start_ratio;
		sceneArr[3].values.canvas_blend_ypos[2].end = nextImg_effect_end_ratio;

		// Canvas_scale_effect -------------------------------------------------------
		const canvas_start_scale = reScaledRatio;
		const canvas_end_scale = canvas_start_scale / 2;

		const canvas_scale_start = nextImg_effect_end_ratio;
		const canvas_scale_end = canvas_scale_start + 0.2;

		sceneArr[3].values.canvas_scale_effect[0] = canvas_start_scale;
		sceneArr[3].values.canvas_scale_effect[1] = canvas_end_scale;
		sceneArr[3].values.canvas_scale_effect[2].start = canvas_scale_start;
		sceneArr[3].values.canvas_scale_effect[2].end = canvas_scale_end;
		// Canvas_scale_effect - End

		// Canvas_after_scale -----------------------------------------
		const fixed_scroll_ypos =
			(canvas_scale_end - can_effect_end_ratio) * sceneArr[3].heightSize;
		sceneArr[3].values.canvas_margin_top = fixed_scroll_ypos;
		// Canvas_after_scle - end

		// Caption(translateY, opacity) effect -------------------------------
		const caption_start = canvas_scale_end;
		const caption_end = caption_start + 0.05;
		sceneArr[3].values.caption_opacity[2].start =
			sceneArr[3].values.caption_translateY[2].start = caption_start;
		sceneArr[3].values.caption_opacity[2].end =
			sceneArr[3].values.caption_translateY[2].end = caption_end;
		// Caption(translateY, opacity) effect - end
	};

	const getCurrentSceneRatio = (currentScene) => {
		const sceneHeight = sceneArr[currentScene].heightSize;
		return currentSceneScrollY / sceneHeight;
	};

	const getCurrentfixedRatio = (currentScene) => {
		const sceneHeight = sceneArr[currentScene].heightSize;
		return (fixedOffsetY - prevSceneOffset) / sceneHeight;
	};


	const getContextValue = (sceneRatio, values) => {
		if (values.length === 3) {
			const fixedEffectValue = values[0];
			const rangeOfVariation = values[1] - values[0];
			const progressRange = values[2].end - values[2].start;
			const progressRate = sceneRatio - values[2].start;
			let effectRatio = progressRate / progressRange;
			if (effectRatio < 0) effectRatio = 0;
			else if (effectRatio > 1) effectRatio = 1;
			return fixedEffectValue + effectRatio * rangeOfVariation;
		}
	};

	const playAnimation = () => {
		const currentSceneRatio = getCurrentSceneRatio(currentScene);
		const C_objs = sceneArr[currentScene].objs;
		const C_value = sceneArr[currentScene].values;

		switch (currentScene) {
			case 0:
				// Message A
				if (currentSceneRatio < 0.22) {
					const messageA__opacity__in = getContextValue(
						currentSceneRatio,
						C_value.messageA__opacity__in
					);
					C_objs.messageA.style.opacity = messageA__opacity__in;
					const messageA__translateY__in = getContextValue(
						currentSceneRatio,
						C_value.messageA__translateY__in
					);
					C_objs.messageA.style.transform = `translate3d(0, ${messageA__translateY__in}px, 0)`;
				} else {
					const m_A_op_out = getContextValue(
						currentSceneRatio,
						C_value.messageA__opacity__out
					);
					C_objs.messageA.style.opacity = m_A_op_out;
					const m_A_tY_out = getContextValue(
						currentSceneRatio,
						C_value.messageA__translateY__out
					);
					C_objs.messageA.style.transform = `translate3d(0, ${m_A_tY_out}px, 0)`;
				}

				// Message B
				if (currentSceneRatio < 0.53) {
					C_objs.messageB.style.opacity = getContextValue(
						currentSceneRatio,
						C_value.messageB__opacity__in
					);
					C_objs.messageB.style.transform = `translate3d(0, ${getContextValue(
						currentSceneRatio,
						C_value.messageB__translateY__in
					)}px, 0)`;
				} else {
					C_objs.messageB.style.opacity = getContextValue(
						currentSceneRatio,
						C_value.messageB__opacity__out
					);
					C_objs.messageB.style.transform = `translate3d(0, ${getContextValue(
						currentSceneRatio,
						C_value.messageB__translateY__out
					)}px, 0)`;
				}

				// Message C
				if (currentSceneRatio < 0.73) {
					C_objs.messageC.style.opacity = getContextValue(
						currentSceneRatio,
						C_value.messageC__opacity__in
					);
					C_objs.messageC.style.transform = `translate3d(0, ${getContextValue(
						currentSceneRatio,
						C_value.messageC__translateY__in
					)}px, 0)`;
				} else {
					C_objs.messageC.style.opacity = getContextValue(
						currentSceneRatio,
						C_value.messageC__opacity__out
					);
					C_objs.messageC.style.transform = `translate3d(0, ${getContextValue(
						currentSceneRatio,
						C_value.messageC__translateY__out
					)}px, 0)`;
				}

				// Message D
				if (currentSceneRatio < 0.93) {
					C_objs.messageD.style.opacity = getContextValue(
						currentSceneRatio,
						C_value.messageD__opacity__in
					);
					C_objs.messageD.style.transform = `translate3d(0, ${getContextValue(
						currentSceneRatio,
						C_value.messageD__translateY__in
					)}px, 0)`;
				} else {
					C_objs.messageD.style.opacity = getContextValue(
						currentSceneRatio,
						C_value.messageD__opacity__out
					);
					C_objs.messageD.style.transform = `translate3d(0, ${getContextValue(
						currentSceneRatio,
						C_value.messageD__translateY__out
					)}px, 0)`;
				}

				// Canvas
				if (currentSceneRatio < 0.5) {
					C_objs.canvas.style.opacity = getContextValue(
						currentSceneRatio,
						C_value.canvas__opacity__in
					);
				} else {
					C_objs.canvas.style.opacity = getContextValue(
						currentSceneRatio,
						C_value.canvas__opacity__out
					);
				}
				
				break;
			case 1: // Scene 2
				break;
			case 2: // Scene 3
				// messageM
				if (currentSceneRatio <= 0.2) {
					C_objs.messageM.style.opacity = getContextValue(
						currentSceneRatio,
						C_value.messageM__opacity__in
					);
					C_objs.messageM.style.transform = `translate3d(0, ${getContextValue(
						currentSceneRatio,
						C_value.messageM__translateY__in
					)}px, 0)`;
				} else {
					C_objs.messageM.style.opacity = getContextValue(
						currentSceneRatio,
						C_value.messageM__opacity__out
					);
					C_objs.messageM.style.transform = `translate3d(0, ${getContextValue(
						currentSceneRatio,
						C_value.messageM__translateY__out
					)}px, 0)`;
				}

				// messageA
				if (currentSceneRatio <= 0.5) {
					C_objs.messageA.style.opacity = getContextValue(
						currentSceneRatio,
						C_value.messageA__opacity__in
					);
					C_objs.messageA.style.transform = `translate3d(0, ${getContextValue(
						currentSceneRatio,
						C_value.messageA__translateY__in
					)}px , 0)`;
				} else {
					C_objs.messageA.style.opacity = getContextValue(
						currentSceneRatio,
						C_value.messageA__opacity__out
					);
					C_objs.messageA.style.transform = `translate3d(0, ${getContextValue(
						currentSceneRatio,
						C_value.messageA__translateY__out
					)}px , 0)`;
				}

				// messageB
				if (currentSceneRatio <= 0.8) {
					C_objs.messageB.style.opacity = getContextValue(
						currentSceneRatio,
						C_value.messageB__opacity__in
					);
					C_objs.messageB.style.transform = `translate3d(0, ${getContextValue(
						currentSceneRatio,
						C_value.messageB__translateY__in
					)}px , 0)`;
				} else {
					C_objs.messageB.style.opacity = getContextValue(
						currentSceneRatio,
						C_value.messageB__opacity__out
					);
					C_objs.messageB.style.transform = `translate3d(0, ${getContextValue(
						currentSceneRatio,
						C_value.messageB__translateY__out
					)}px , 0)`;
				}

				// Canvas

				if (currentSceneRatio <= 0.5) {
					C_objs.canvas.style.opacity = getContextValue(
						currentSceneRatio,
						C_value.canvas__opacity__in
					);
				} else {
					C_objs.canvas.style.opacity = getContextValue(
						currentSceneRatio,
						C_value.canvas__opacity__out
					);
				}
				break;

			case 3: // Scene 4
				// drawImage(src, sx, sy, sw, sh, dx, dy, dw, dy)
				C_objs.canvasContext.fillStyle = 'white';
				if (currentSceneRatio < C_value.img_swap_point) {
					C_objs.canvas.classList.remove('section4_fixed');
					C_objs.canvasContext.drawImage(
						C_value.imgs[0],
						0,
						0,
						C_value.imgs[0].width,
						C_value.imgs[0].height,
						0,
						0,
						C_objs.canvas.width,
						C_objs.canvas.height
					);
					C_objs.canvasContext.fillRect(
						getContextValue(currentSceneRatio, C_value.canvas_fill_left),
						0,
						C_value.rect_size_W,
						C_value.rect_size_H
					);
					C_objs.canvasContext.fillRect(
						getContextValue(currentSceneRatio, C_value.canvas_fill_right),
						0,
						C_value.rect_size_W,
						C_value.rect_size_H
					);
				} else if (currentSceneRatio <= C_value.canvas_scale_effect[2].end) {
					//Canvas_blend_effect
					C_objs.canvas.classList.add('section4_fixed');
					C_objs.canvas.style.top = `-${C_value.reSizedSpace_H}px`;

					C_objs.canvasContext.drawImage(
						C_value.imgs[0],
						0,
						0,
						C_value.imgs[0].width,
						C_value.imgs[0].height,
						0, // dx
						0, // dy
						C_objs.canvas.width, // dw
						C_objs.canvas.height // dh
					);

					// blendImg draw
					C_objs.canvasContext.drawImage(
						C_value.imgs[1],
						0, // sx
						getContextValue(currentSceneRatio, C_value.canvas_blend_ypos), // sy
						C_value.imgs[1].width, //sw
						C_value.imgs[1].height - 
							getContextValue(currentSceneRatio, C_value.canvas_blend_ypos), // sh
						0, // dx
						getContextValue(currentSceneRatio, C_value.canvas_next_ypos), //dy
						C_objs.canvas.width, // dw
						C_objs.canvas.height -
							getContextValue(currentSceneRatio, C_value.canvas_next_ypos) // dh
					);
				

					// Canvas_scale_effect
					if (
						currentSceneRatio >= C_value.canvas_scale_effect[2].start &&
						currentSceneRatio <= C_value.canvas_scale_effect[2].end
					) {
						C_objs.canvas.style.transform = `scale(${getContextValue(
							currentSceneRatio,
							C_value.canvas_scale_effect
						)})`;
					}
				}
				// Canvas marginTop effect
				if (currentSceneRatio > C_value.canvas_scale_effect[2].end) {
					C_objs.canvas.style.marginTop = `${C_value.canvas_margin_top}px`;
					C_objs.canvas.classList.remove('section4_fixed');
				} else {
					C_objs.canvas.style.marginTop = 0;
				}

				// Caption(translateY, opacity) effect
				if (currentSceneRatio >= C_value.canvas_scale_effect[2].end) {
					C_objs.caption.style.opacity = `${getContextValue(
						currentSceneRatio,
						C_value.caption_opacity
					)}`;
					C_objs.caption.style.transform = `translate3d(0, ${getContextValue(
						currentSceneRatio,
						C_value.caption_translateY
					)}px, 0)`;
				} else {
					C_objs.caption.style.opacity = 0;
				}
				break;
			default:
				console.log('playAnimation__switchError');
		}
	};

	const sceneCheck = () => {
		scrollYOffset = window.scrollY;
		prevSceneOffset = 0;

		// This is because each area has a different height size.
		for (let i = 0; i < currentScene; i++) {
			prevSceneOffset += sceneArr[i].heightSize;
		}

		// scrollY 값이 current scene height 값보다 클 때 scene이 이동했다는 의미 -> currentscene++
		if (Math.round(fixedOffsetY) > prevSceneOffset + sceneArr[currentScene].heightSize) {
			currentScene++;
			document.body.setAttribute('id', `scene-show-${currentScene + 1}`);
			return;
		}

		if (Math.round(fixedOffsetY) < prevSceneOffset) {
			// To prevent to the Bound effect from the mobile browser.
			if (Math.round(fixedOffsetY) === 0) return;

			currentScene--;
			document.body.setAttribute('id', `scene-show-${currentScene + 1}`);
			return;
		}

		currentSceneScrollY = scrollY - prevSceneOffset;
		//  console.log(currentScene, currentSceneScrollY)

		playAnimation();
	};

	const loadImage = () => {
		// Scene 1: 300
		for (let i = 0; i < IMG_COUNT.scene1; i++) {
			const imgElem = new Image();
			imgElem.src = `./video/001/IMG_${6726 + i}.JPG`;
			sceneArr[0].values.imgs.push(imgElem);
		}
		// Scene 2: 960
		for (let i = 0; i < IMG_COUNT.scene2; i++) {
			const imgElem = new Image();
			imgElem.src = `./video/002/IMG_${7027 + i}.JPG`;
			sceneArr[2].values.imgs.push(imgElem);
		}
		// Scene 4: blend Image
		for (let i = 0; i < IMG_COUNT.scene4; i++) {
			const imgElem = new Image();
			imgElem.src = `./images/blend_img_${i + 1}.jpeg`;
			sceneArr[3].values.imgs.push(imgElem);
		}
	};


	const loop = () => {
		const threshold = 0.1;
		const calibratedOffset = scrollY - fixedOffsetY;
		fixedOffsetY += calibratedOffset * threshold;
		if(Math.abs(calibratedOffset) < 1){
			cancelAnimationFrame(rafId);
			rafSt = false;
		} else {
			rafSt = true;
			// Drawing Img
			
			let currentFixedOffsetRatio = 0;
			// Section 1
			if(currentScene === 0){
				currentFixedOffsetRatio = getCurrentfixedRatio(currentScene);
				// the index of Image to be showed now
				console.log(currentFixedOffsetRatio);
				let imgIndex = Math.round(currentFixedOffsetRatio * IMG_COUNT.scene1 - 1);
				// To prevent to exceed refering index
				if (imgIndex < 0) imgIndex = 0;
				else if (imgIndex > IMG_COUNT.scene1 - 1)
					imgIndex = IMG_COUNT.scene1 - 1;
				sceneArr[0].objs.canvasContext.drawImage(sceneArr[0].values.imgs[imgIndex], 0, 0);
			
				// Section 2
			} else if (currentScene === 2){
				currentFixedOffsetRatio = getCurrentfixedRatio(currentScene);
				console.log(currentFixedOffsetRatio);
				let imgIndex__3 = Math.round(currentFixedOffsetRatio * IMG_COUNT.scene2 - 1);
				if (imgIndex__3 < 0) imgIndex__3 = 0;
				else if (imgIndex__3 > IMG_COUNT.scene2 - 1)
					imgIndex__3 = IMG_COUNT.scene2 - 1;
				sceneArr[2].objs.canvasContext.drawImage(sceneArr[2].values.imgs[imgIndex__3], 0, 0);
			}
			

			rafId = requestAnimationFrame(loop);
		} 
	}
	

	loadImage();
	window.addEventListener('resize', () => {
		setSize();
		sceneCheck();
	});
	window.addEventListener('load', () => {
		setSize();
		sceneCheck();
	});
	window.addEventListener('scroll', () => {
		if(!rafSt){
			rafId = requestAnimationFrame(loop);
		}
		sceneCheck();
		checkMenu();
	});
})();
	