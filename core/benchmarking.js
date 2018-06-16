const microtime = require('microtime')

// Benchmarking stuff
class Benchmarking {
	Time(name, repetitions, test){
		let t1 = microtime.now()
		for (let i = 0; i < repetitions; i++) {
			test()
		}
		let t2 = microtime.now()
		let delta_time = t2 - t1
		this.Log(name, delta_time, repetitions)
		return delta_time
	}

	Log(name, microseconds, repetitions) {
		let seconds = microseconds/1000000
		let per_second = repetitions/seconds
		console.log("Operation '%s' completed in %ss", name, seconds)
		console.log("   speed: %sr/s", Math.floor(per_second))
		console.log("   micro: %sμs", microseconds)
	}

}

module.exports = new Benchmarking()