### Дз к лекции 5

**Код с решениями находиться в файле homeWork_04.js**
**Примеры реализации сортировок в файле sorts_04.js**

### Задание 1 - Какие бывают алгоритмы сортировок

Существует множество алгоритмов сортировки, каждый из которых имеет свои особенности и области применения. Большинство алгоритмов можно разделить по базовым **принципам**, на которых они строятся: **выборка**, **включение**, **распределение**, **обмен** и **слияние**.
Алгоритмы основанные на каждом из этих приемов: 
1. Сортировка выбором 
2. Сортировка пузырьком 
5. Сортировка вставками 
6. Сортировка слиянием 
7. Сортировка Шелла
8. Быстрая сортировка

Основные критерии, по которым оцениваются алгоритмы сортировки:
- **Сложность (количество сравнений)**: определяет, насколько эффективно алгоритм сортирует данные. Наиболее быстрые алгоритмы имеют сложность $O(nlog⁡n)$.
- **Память**: учитывается, если алгоритм требует дополнительной памяти.

Дополнительные критерии
- **Устойчивость**: алгоритм сохраняет порядок равных элементов.
- **Естественность поведения**: алгоритм эффективнее обрабатывает уже частично отсортированные данные.

#### Сортировка методом выборки

Алгоритм выбирает наименьший элемент и помещает его в начало, затем повторяет операцию для оставшейся части массива.

- **Сложность**: O(n2)O(n^2)O(n2)
- **Память**: работает "на месте".
- **Минусы**: неустойчивый, медленный на почти отсортированных массивах.

Данный метод сортировки имеет смысл использовать только в случаях, когда явно необходимо минимизировать количество присваиваний.


#### Сортировка обменами (Пузырьковая сортировка)

Простейший алгоритм, при котором соседние элементы меняются местами, если они стоят в неправильном порядке. Повторяется до полного упорядочивания.

- **Сложность**: O(n2)O(n^2)O(n2)
- **Плюсы**: устойчивый.
- **Минусы**: неэффективен на больших или частично отсортированных данных.



#### Сортировка методом включениями (вставками)

В отличие от других методов, сортировка вставками не использует обмены.
При сортировке включением на каждом шаге мы выбираем очередной элемент входных данных (метод выбора очередного элемента из исходного массива произволен; но обычно – и с целью получения устойчивого алгоритма сортировки –  элементы вставляются по порядку их появления во входном массиве) и вставляем его на нужную позицию в уже отсортированном списке, до тех пор, пока набор входных данных не будет исчерпан.
#### Сортировка простыми вставками 

При сортировке включением на каждом шаге мы выбираем очередной элемент входных данных (метод выбора очередного элемента из исходного массива произволен; но обычно – и с целью получения устойчивого алгоритма сортировки –  элементы вставляются по порядку их появления во входном массиве) и вставляем его на нужную позицию в уже отсортированном списке, до тех пор, пока набор входных данных не будет исчерпан.

- **Сложность**: $O(n^2)$, но работает быстрее на частично отсортированных данных.
- **Плюсы**: простой, устойчивый, эффективен на небольших данных и частично упорядоченных массивах.


#### Сортировка методом Шелла 

Данный алгоритм является развитием метода сортировки вставками, по-другому данный алгоритм называется сортировка вставками с уменьшающимся расстоянием.
Основное отличие заключается в том что в данном алгоритме сравниваются элементы находящиеся не только рядом, но и на некотором расстоянии друг от друга. 
В сортировке данным методом сложность зависит от выбора последовательности интервалов.

- **Сложность**: зависит от шага, в среднем $O(nlog^2n)$.
- **Плюсы**: работает быстрее обычной сортировки вставками.


#### Сортировка методом слияния 

Сортировка слиянием – один из самых известных алгоритмов сортировки, и вместе с быстрой сортировкой, вероятно, является первым эффективным алгоритмом сортировки общего назначения. 

- Делит массив на подмассивы, каждый из которых сортируется отдельно, а затем объединяются в общий отсортированный массив.
- Использует рекурсию для достижения базового состояния, когда подмассив состоит из одного элемента, после чего слияние выполняется поэтапно.

- **Сложность**: $O(nlogn)$ для всех случаев (худший, лучший и средний).
- **Память**: Требует дополнительную память для слияния, так как подмассивы не обрабатываются "на месте".
- **Особенности**: Устойчивый алгоритм, стабильно эффективный для больших объемов данных.


#### Быстрая сортировка (Quick Sort)

Быстрая сортировка является улучшенным вариантом алгоритма сортировки с помощью прямого обмена, который известен своей низкой эффективностью. Принципиальное отличие состоит в том, что после каждого прохода элементы делятся на две независимые группы.

Алгоритм выбирает опорный элемент, вокруг которого группирует массив на элементы меньше и больше опорного. Затем подмассивы рекурсивно сортируются по такому же принципу.

Выбор опорного элемента влияет на производительность алгоритма; оптимальный выбор уменьшает количество операций.
- **Сложность**: O(nlog⁡n)O(n \log n)O(nlogn) в среднем и O(n2)O(n^2)O(n2) в худшем случае, если выбор опорного элемента неудачен.
- **Память**: Требует дополнительную память для стека рекурсии, но не использует временные массивы.
- **Особенности**: Неустойчивый, очень быстрый на случайных и больших объемах данных. Быстрая сортировка легко распараллеливается, поэтому часто используется.



#### Таблица сравнения сложности алгоритмов сортировки

| Вид                 | Лучшая     | Средняя      | Худшая     |
| ------------------- | ---------- | ------------ | ---------- |
| Простыми обменами   | $O(N)$     | $O(N^2)$     | $O(N^2)$   |
| Простыми вставками  | $O(N)$     | $O(N^2)$     | $O(N^2)$   |
| Прямой выборкой     | $O(N^2)$   | $O(N^2)$     | $O(N^2)$   |
| Сортировка Шелла    | $O(nlogn)$ | $O(nlog^2n)$ | $O(N^2)$   |
| Сортировка слиянием | $O(nlogn)$ | $O(nlogn)$   | $O(nlogn)$ |
| Quick Sort          | $O(nlogn)$ | $O(nlogn)$   | $O(N^2)$   |