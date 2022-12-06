## Proje 2 

### [16,21,11,8,12,22] Dizisinin merge sorta göre aşamaları.


1) [16,21,11] ---- [8,12,22]  

2) [16] ---- [21,11] ---- [8,12] ---- [22]   

3) [16] ---- [21] ---- [11] ---- [8]----[12]----[22]   

4) [16] ---- [11,21] ---- [8,12]----[22]  

5) [11,16,21] ---- [8,12,22]  

6) **[8,11,12,16,21,22]**

*Merge Sort diziyi tek teke elemanlara parçalayana kadar 2'ye böler. Diziyi parçaladıktan sonra local olarak sıralama yapar. Bu sayede her bir index için n-1 işlem yapılmış olur. Sürekli diziyi ikiye böldüğümüz için n-1 işlemi logn defa da gerçekleştirir. Bu yüzden Big-O notasyonu O(nlogn) dir.*


