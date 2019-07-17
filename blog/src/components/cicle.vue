<template>
	<el-main class="container">
		<ul class="slider-circle">
			<li class="circle-one">HTML</li>
			<li class="circle-two">css</li>
			<li class="circle-three">css3</li>
			<li class="circle-four">HTML5</li>
			<li class="circle-five">JS</li>
			<li class="circle-six">jQuery</li>
			<li class="circle-seven">Vue</li>
		</ul>
	</el-main>
</template>

<script>
    export default {

    }
</script>

<style scoped>
	.container{
		height: 100%;
	}
	/*移动小球 start*/
	.slider-circle{
		position: absolute;
		height: 100%;
		width: 100%;
		text-align: center;
		overflow: hidden;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	.slider-circle>li {
		position: absolute;
		left: -160px;
		font-size: 30px;
		color: #ccc;
		cursor: pointer;
		border-radius: 50%;
		padding: 10px;
		box-shadow: 0 0 30px rgb(146, 155, 255) inset;
		font-family: "微软雅黑";
		font-weight: 200;
		text-align: center;
		width: 100px;
		height: 100px;
		line-height: 100px;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		-khtml-user-select: none;
		user-select: none;
		opacity: 1;
	}
	.slider-circle .circle-one {
		-webkit-animation: circle-one 30s linear 3s infinite;
		box-shadow: 0 0 30px rgb(39, 90, 213) inset;
	}
	@keyframes circle-one{
		0%{ left: 10%; bottom: 0; transform: scale(0.4) rotate(70deg); }
		20%{ left: 20%; bottom: 10%; }
		40%{ left: 30%; bottom: 30%; }
		60%{ left: 40%; bottom: 50%; transform: scale(1.2) rotate(-200deg); }
		80%{ left: 20%; bottom: 70%; }
		100%{  left: 0%; bottom: 110%; transform: rotate(720deg) scale(0.3);  }
	}
	.slider-circle .circle-two{
		-webkit-animation: circle-two 20s linear infinite;
		box-shadow: 0 0 30px rgb(176, 156, 47) inset;
	}
	@keyframes circle-two{
		0%{ left: 90%; bottom: 0; transform: rotate(120deg) scale(0.3); }
		20%{ bottom: 10%; }
		40%{ bottom: 30%; transform: scale(1.3);  }
		60%{ bottom: 50%; transform: rotate(480deg); }
		80%{ bottom: 70%; }
		100%{ left: 0%; bottom: 110%; transform: rotate(-120deg) scale(0.5);  }
	}
	.slider-circle .circle-three{
		-webkit-animation: circle-three 20s linear 5s infinite;
		box-shadow: 0 0 30px rgb(106, 239, 113) inset;
	}
	@keyframes circle-three{
		0%{ left: 20%; bottom: 0; transform: rotate(10deg) scale(0.3); }
		20%{ }
		40%{ transform: scale(1);  }
		60%{ transform: rotate(480deg); }
		80%{  }
		100%{ left: 90%; bottom: 110%; transform: rotate(-120deg) scale(0.2);  }
	}
	.slider-circle .circle-four{
		-webkit-animation: circle-four 20s linear 1s infinite;
		box-shadow: 0 0 30px rgb(240, 61, 213) inset;
	}
	@keyframes circle-four{
		0%{ left: 100%; bottom: 0; transform: rotate(90deg) scale(1); }
		20%{ }
		40%{ transform: scale(0.4);  }
		60%{ transform: rotate(480deg); }
		80%{  }
		100%{ left: 0; bottom: 110%; transform: rotate(-120deg) scale(0.8);  }
	}
	.slider-circle .circle-five{
		-webkit-animation: circle-five 18s linear 5s infinite;
		box-shadow: 0 0 30px rgb(45, 198, 15) inset;
	}
	@keyframes circle-five{
		0%{ left: 30%; bottom: 0; transform: rotate(0deg) scale(1); }
		20%{ }
		40%{ transform: scale(0.4);  }
		60%{ transform: rotate(480deg); }
		80%{  }
		100%{ left: 80%; bottom: 110%; transform: rotate(-120deg) scale(0.8);  }
	}
	.slider-circle .circle-six{
		-webkit-animation: circle-six 40s linear 5s infinite;
		box-shadow: 0 0 30px rgb(255, 225, 94) inset;
	}
	@keyframes circle-six{
		0%{ left: 90%; bottom: 20%; }
		20%{  }
		40%{ left: 60%; bottom: 80%; transform: scale(1.1);  }
		60%{ transform: rotate(-360deg); }
		80%{  }
		100%{ left: 80%; bottom: 100%; transform: rotate(220deg) scale(0.2);  }
	}
	.slider-circle .circle-seven{
		-webkit-animation: circle-seven 18s linear 4s infinite;
		box-shadow: 0 0px 30px rgb(146, 155, 255) inset;
	}
	@keyframes circle-seven{
		0%{ left: 0%; bottom: 0%; }
		20%{ left: 20%; bottom: 40%; }
		40%{ left: 40%; bottom: 10%; transform: scale(1.1);  }
		60%{ left: 60%;  bottom: 25%; transform: rotate(-360deg); }
		80%{ left: 80%; bottom: 50%; }
		100%{ left: 100%; bottom: 0%; transform: rotate(220deg) scale(0.4);  }
	}
	/*移动小球 end*/
</style>