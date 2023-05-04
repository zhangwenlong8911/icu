window.BENCHMARK_DATA = {
  "lastUpdate": 1683216644791,
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
        "date": 1683211318428,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 58849.4171,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 104822.6057,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4295,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.4883,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 3.9134,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12387.848,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 40945.9052,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2132.0861,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
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
        "date": 1683214492400,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60288.9434,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108250.5678,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4337,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.6975,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0652,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12749.838,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41918.984,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2200.4637,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zhangwenlong@loongson.cn",
            "name": "Wenlong Zhang",
            "username": "zhangwenlong8911"
          },
          "committer": {
            "email": "zhangwenlong@loongson.cn",
            "name": "Wenlong Zhang",
            "username": "zhangwenlong8911"
          },
          "distinct": true,
          "id": "d71f793a027b72496d6cb31d6ddc941c9ec6914d",
          "message": "fix build error for loongarch64\n\nupdate config.guess config.sub\ncurl -sL -o config.guess 'https://git.savannah.gnu.org/gitweb/?p=config.git;a=blob_plain;f=config.guess;hb=HEAD'\ncurl -sL -o config.sub 'https://git.savannah.gnu.org/gitweb/?p=config.git;a=blob_plain;f=config.sub;hb=HEAD'\n\nSigned-off-by: Wenlong Zhang <zhangwenlong@loongson.cn>",
          "timestamp": "2023-05-04T20:32:46+08:00",
          "tree_id": "6450a07640b4cfb607bbcb67a26360b508ca8881",
          "url": "https://github.com/zhangwenlong8911/icu/commit/d71f793a027b72496d6cb31d6ddc941c9ec6914d"
        },
        "date": 1683216608365,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 108012.2397,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 130874.2895,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5243,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.8762,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8836,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 15030.2089,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 49510.715,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2596.7676,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      }
    ]
  }
}