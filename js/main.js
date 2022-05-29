// IIFE -> not to refer to the varaibles from anywhere
(() => {
	// amount of img have to be decied previously.

	const IMG_COUNT = {
		scene1: 300,
		scene2: 960,
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
				canvas: document.querySelector(
					'#section__1 .section__1-canvas'
				),
				canvasContext: document
					.querySelector(
						'#section__1 .section__1-canvas'
					)
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
			// Scene 4
			type: 'sticky',
			heightSize: 0,
			heightMultiple: 5,
			objs: {
				container: document.querySelector('#section__4'),
			},
		},
	];

	// Global variables

	let prevSceneOffset = 0; // To check that which scene is on the screen
	let currentScene = 0; // To check the size of each section;

	const setHeight = () => {
		// setting the area of scrolling
		for (let i = 0; i < sceneArr.length; i++) {
			const sceneContainer = document.querySelector(`#section__${i + 1}`);
			sceneArr[i].heightSize = window.innerHeight * sceneArr[i].heightMultiple;
			sceneContainer.style.height = `${sceneArr[i].heightSize}px`;
		}
		// console.log(innerHeight);

		let scrollYOffset = window.scrollY;
		let pageHeight = 0;
		let currentSceneScrollY = 0;

		for (let i = 0; i < sceneArr.length; i++) {
			pageHeight += sceneArr[i].heightSize;
			console.log(scrollYOffset, pageHeight);
			if (scrollYOffset < pageHeight) {
				currentScene = i;
				break;
			}
		}
		document.body.setAttribute('id', `scene-show-${currentScene + 1}`);
	};

	const getCurrentSceneRatio = (currentScene) => {
		const sceneHeight = sceneArr[currentScene].heightSize;
		return currentSceneScrollY / sceneHeight;
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
				// the index of Image to be showed now
				let imgIndex = Math.round(currentSceneRatio * IMG_COUNT.scene1 - 1);
				// To prevent to exceed refering index
				if (imgIndex < 0) imgIndex = 0;
				else if (imgIndex > IMG_COUNT.scene1 - 1)
					imgIndex = IMG_COUNT.scene1 - 1;
				C_objs.canvasContext.drawImage(C_value.imgs[imgIndex], 0, 0);
				break;
			case 1: // Scene 2
				break;
			case 2:  // Scene 3

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
				if(currentSceneRatio <= 0.5) {
					C_objs.messageA.style.opacity = getContextValue(
						currentSceneRatio,
						C_value.messageA__opacity__in
					);
					C_objs.messageA.style.transform = `translate3d(0, ${getContextValue(currentSceneRatio,
						C_value.messageA__translateY__in)}px , 0)`;
				} else {
					C_objs.messageA.style.opacity = getContextValue(
						currentSceneRatio,
						C_value.messageA__opacity__out
					);
					C_objs.messageA.style.transform = `translate3d(0, ${getContextValue(currentSceneRatio,
						C_value.messageA__translateY__out)}px , 0)`;
				}

				// messageB
				if(currentSceneRatio <= 0.8) {
					C_objs.messageB.style.opacity = getContextValue(
						currentSceneRatio,
						C_value.messageB__opacity__in
					);
					C_objs.messageB.style.transform = `translate3d(0, ${getContextValue(currentSceneRatio,
						C_value.messageB__translateY__in)}px , 0)`;
				} else {
					C_objs.messageB.style.opacity = getContextValue(
						currentSceneRatio,
						C_value.messageB__opacity__out
					);
					C_objs.messageB.style.transform = `translate3d(0, ${getContextValue(currentSceneRatio,
						C_value.messageB__translateY__out)}px , 0)`;
				};
				
				// Canvas

				if(currentSceneRatio <= 0.5) {
					C_objs.canvas.style.opacity = getContextValue(currentSceneRatio, C_value.canvas__opacity__in);
				} else {
					C_objs.canvas.style.opacity = getContextValue(currentSceneRatio, C_value.canvas__opacity__out);
				}

				let imgIndex__3 = Math.round(currentSceneRatio * IMG_COUNT.scene2 - 1);
				if(imgIndex__3 < 0) imgIndex__3 = 0;
				else if(imgIndex__3 > IMG_COUNT.scene2 - 1) imgIndex__3 = IMG_COUNT.scene2 - 1;
				C_objs.canvasContext.drawImage(C_value.imgs[imgIndex__3], 0, 0);
				break;
			case 3:
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
		if (scrollYOffset > prevSceneOffset + sceneArr[currentScene].heightSize) {
			currentScene++;
			document.body.setAttribute('id', `scene-show-${currentScene + 1}`);
			return;
		}

		if (scrollYOffset < prevSceneOffset) {
			// To prevent to the Bound effect from the mobile browser.
			if (scrollYOffset === 0) return;

			currentScene--;
			document.body.setAttribute('id', `scene-show-${currentScene + 1}`);
			return;
		}

		currentSceneScrollY = scrollYOffset - prevSceneOffset;
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
	};

	setHeight();
	loadImage();
	window.addEventListener('resize', setHeight);
	window.addEventListener('load', () => {
		console.log(sceneArr[2].values.imgs);
		setHeight();
		sceneCheck();
		playAnimation();
	});
	window.addEventListener('scroll', () => {
		sceneCheck();
	});
})();
