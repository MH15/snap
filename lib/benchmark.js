// Load libraries
const micro = require('microtime')

class Benchmark {
  // Time
  // -
  // Benchmark a function and return used time
  Time(name, iterations, test) {
    // Record start time
    let start = micro.now()

    // Call function
    for(let i = 0; i < iterations; i++) {
      test()
    }

    // Record end time
    let end = micro.now()

    // Calculate time usage
    let elapsed = end - start

    // Log result
    this.Log(name, elapsed, iterations)

    // Return statistics
    return elapsed
  }

  // Log
  // -
  // Print benchmark results to console
  Log(name, elapsed, iterations) {
    // Calculate different results
    let seconds = elapsed / 1e6
    let perSecond = iterations / seconds
    let perIteration = elapsed / iterations

    // Print results
    console.log("Operation '%s' completed in %ss", name, seconds)
    console.log("    speed: %so/s",  Math.floor(perSecond))
    console.log("    micro: %sµs/o", perIteration)
    console.log("    total: %sµs",   elapsed)
  }
}

module.exports = new Benchmark()
