    
    function sort012(arr, N)
    {
        //your code here
        let left =0;
        let right = N-1;
       let i=0;
       while(i<right){
        if(arr[i]==0){
            let temp=arr[left];
            arr[left]=arr[i];
            arr[i] = temp;
            left++;
            i++;

        }
        else if (arr[i]==2){
            let temp = arr[right];
            arr[right]=arr[i];
            arr[i]=temp;
            right--;
            
        }
        else{
            i++;
        }
       }
        
        console.log(arr)
        
    }

    sort012([0,2,1],3)


    // setTimeout(()=>{
    //     console.log("Dhruvi")
    // },1000)
    // for(let i=0;i<=10000;i++){
    //     console.log("Hi");
    // }

    function cannotAccessThis(number){
        console.log("inside function: this object is: " + this);
    }
    cannotAccessThis();
