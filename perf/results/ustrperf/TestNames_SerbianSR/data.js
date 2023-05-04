window.BENCHMARK_DATA = {
  "lastUpdate": 1683212233873,
  "repoUrl": "https://github.com/zhangwenlong8911/icu",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "vichang@google.com",
            "name": "Victor Chang",
            "username": "gvictor"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "530ca9817641c6a90c9c8c5028996de1d559e4a8",
          "message": "ICU-22371 Fix ULocale.getISOLanguages() API docs",
          "timestamp": "2023-05-03T11:13:32-07:00",
          "tree_id": "4c0c892bf64dfe4a34ef1a0a7b2b2404e1bc60d7",
          "url": "https://github.com/zhangwenlong8911/icu/commit/530ca9817641c6a90c9c8c5028996de1d559e4a8"
        },
        "date": 1683212231922,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 22.3986,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 25.1213,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 28.5981,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.9538,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 44.6667,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 46.5207,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 27.4415,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 18.9308,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 180.3162,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 28.9339,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 59.2476,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 51.2752,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      }
    ]
  }
}