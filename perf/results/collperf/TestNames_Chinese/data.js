window.BENCHMARK_DATA = {
  "lastUpdate": 1683216649605,
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
        "date": 1683211172986,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestIcu_KeyGen_null",
            "value": 220.9053,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_qsort_strcoll_null",
            "value": 11807213.4624,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_qsort_usekey",
            "value": 2545599.839,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_BinarySearch_strcoll_null",
            "value": 11134653.7104,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_BinarySearch_usekey",
            "value": 2699987.1687,
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
        "date": 1683211172986,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestIcu_KeyGen_null",
            "value": 220.9053,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_qsort_strcoll_null",
            "value": 11807213.4624,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_qsort_usekey",
            "value": 2545599.839,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_BinarySearch_strcoll_null",
            "value": 11134653.7104,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_BinarySearch_usekey",
            "value": 2699987.1687,
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
        "date": 1683214309754,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestIcu_KeyGen_null",
            "value": 223.6775,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_qsort_strcoll_null",
            "value": 11793988.0109,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_qsort_usekey",
            "value": 2552656.9245,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_BinarySearch_strcoll_null",
            "value": 11215442.5786,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_BinarySearch_usekey",
            "value": 2699476.6988,
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
          "id": "63b5c19ebdf359c0ed59dae4eb9a03638003659e",
          "message": "fix build error for loongarch64\n\ncurl -sL -o config.guess 'https://git.savannah.gnu.org/gitweb/?p=config.git;a=blob_plain;f=config.guess;hb=HEAD'\ncurl -sL -o config.sub 'https://git.savannah.gnu.org/gitweb/?p=config.git;a=blob_plain;f=config.sub;hb=HEAD'\n\nSigned-off-by: Wenlong Zhang <zhangwenlong@loongson.cn>",
          "timestamp": "2023-05-04T20:31:27+08:00",
          "tree_id": "6450a07640b4cfb607bbcb67a26360b508ca8881",
          "url": "https://github.com/zhangwenlong8911/icu/commit/63b5c19ebdf359c0ed59dae4eb9a03638003659e"
        },
        "date": 1683215520451,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestIcu_KeyGen_null",
            "value": 219.4363,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_qsort_strcoll_null",
            "value": 11420738.286,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_qsort_usekey",
            "value": 2789019.9773,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_BinarySearch_strcoll_null",
            "value": 10338683.5714,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_BinarySearch_usekey",
            "value": 2991850.4532,
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
        "date": 1683216623884,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestIcu_KeyGen_null",
            "value": 272.7368,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_qsort_strcoll_null",
            "value": 14224440.5367,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_qsort_usekey",
            "value": 3056414.4349,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_BinarySearch_strcoll_null",
            "value": 13775191.8275,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_BinarySearch_usekey",
            "value": 3236842.1715,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      }
    ]
  }
}