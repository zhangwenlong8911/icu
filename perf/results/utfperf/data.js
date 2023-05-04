window.BENCHMARK_DATA = {
  "lastUpdate": 1683211002269,
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
        "date": 1683211000895,
        "tool": "ndjson",
        "benches": [
          {
            "name": "Roundtrip",
            "value": 15.634,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "FromUnicode",
            "value": 5.4435,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "FromUTF8",
            "value": 2.8445,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      }
    ]
  }
}