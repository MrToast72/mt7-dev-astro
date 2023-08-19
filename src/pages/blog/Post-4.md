---
layout: ../../layouts/BlogPosts.astro
href: /blog/Post-4
classes: contentBoxes gridColumnSpan2
title: An Overview of Search Functions in C++
date: 15-06-2023
discription: C++ provides several built-in functions for searching arrays and containers for specific values or ranges.
---

C++ provides several built-in functions for searching arrays and containers for specific values or ranges. These functions include both linear and binary search algorithms, as well as specialized algorithms for searching sorted and unsorted data.

# Linear Search

The linear search algorithm is a simple sequential search that checks each element of an array or container in order until the desired value is found or the end of the array is reached. C++ provides the `find()` algorithm for performing linear search on a container. This algorithm takes two iterators that define the range to search, and a value to search for. If the value is found, `find()` returns an iterator to the first occurrence of the value in the range, otherwise it returns the end iterator.

Here is an example of using `find()` to search for a value in a vector:

```cpp
#include <iostream>

int main() {
  int arr[] = {1, 2, 3, 4, 5};
  int n = sizeof(arr) / sizeof(arr[0]);
  int x = 3;

  int i;
  for (i = 0; i < n; i++) {
    if (arr[i] == x) {
      std::cout << "Value found: " << x << '\n';
      break;
    }
  }

  if (i == n) {
    std::cout << "Value not found\n";
  }

  return 0;
}
```

Output:

```yaml
Found value: 3
```

# Binary Search

The binary search algorithm is a more efficient search algorithm than linear search that only works on sorted arrays or containers. It works by repeatedly dividing the search interval in half until the desired value is found or the interval is empty. C++ provides the `binary_search()` algorithm for performing binary search on a container. This algorithm takes two iterators that define the sorted range to search, and a value to search for. If the value is found, `binary_search()` returns `true`, otherwise it returns `false`.

Here is an example of using `binary_search()` to search for a value in a vector:

```cpp
#include <iostream>

int main() {
  int arr[] = {1, 2, 3, 4, 5};
  int n = sizeof(arr) / sizeof(arr[0]);
  int x = 3;

  int left = 0;
  int right = n - 1;
  int mid;

  while (left <= right) {
    mid = (left + right) / 2;

    if (arr[mid] == x) {
      std::cout << "Value found\n";
      break;
    } else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (left > right) {
    std::cout << "Value not found\n";
  }

  return 0;
}
```

Output:

```yaml
Value found
```

# Sorted Algorithms

C++ also provides several specialized search algorithms for sorted data, including `lower_bound()`, `upper_bound()`, and `equal_range()`. These algorithms can be more efficient than linear or binary search when searching for a range of values in a sorted container.

The `lower_bound()` algorithm returns an iterator to the first element in a sorted container that is not less than a given value. The `upper_bound()` algorithm returns an iterator to the first element in a sorted container that is greater than a given value. The `equal_range()` algorithm returns a pair of iterators that define the range of elements in a sorted container that are equal to a given value.

Here is an example of using `lower_bound()` to find the first element in a sorted vector that is not less than a given value:

```cpp
#include <vector>
#include <algorithm>
#include <iostream>

int main() {
  std::vector<int> v {1, 2, 3, 3, 3, 4, 5};

  auto result = std::lower_bound(v.begin(), v.end(), 3);

  std::cout << "Found value: " << *result << '\n';

  return 0;
}
```

Output:

```yaml
Found value: 3
```

# Interpolation Search

```cpp
#include <iostream>

int main() {
  int arr[] = {1, 2, 3, 4, 5};
  int n = sizeof(arr) / sizeof(arr[0]);
  int x = 3;

  int left = 0;
  int right = n - 1;
  int pos;

  while (left <= right && x >= arr[left] && x <= arr[right]) {
    pos = left + ((x - arr[left]) * (right - left)) / (arr[right] - arr[left]);

    if (arr[pos] == x) {
      std::cout << "Value found\n";
      break;
    } else if (arr[pos] < x) {
      left = pos + 1;
    } else {
      right = pos - 1;
    }
  }

  if (left > right) {
    std::cout << "Value not found\n";
  }

  return 0;
}
```


Output:

```yaml
Value found
```


