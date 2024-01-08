const data={ 
    Personal:[
        {
            title:"First name",
            placeholder:"",
            required:true,
            size:"half",
            name:"firstName"
        }
        ,
        {
            title:"Last name",
            placeholder:"",
            required:true,
            size:"half",
            name:'lastName'
        }
        ,
        {
            title:"Email address",
            placeholder:"example@gmail.com",
            recommended:true,
            name:'email'
        }
        ,
        {
            title:"Phone number",
            placeholder:"Ex: 534 5434 3532",
            name:'phoneNumber'
        }
        ,
        {
            title:"Address",
            recommended:true,
            placeholder:"City, Country",
            name:'address'
        },
        {
            title:"linkedIn",
            placeholder:"Your linkedIn url",
            name:'linkedIn'
        }

    ],
    Education:[
    {
        title:"School",
        recommended:false,
        placeholder:"",
        required:true,
        name:'school'
    }
    ,
    {
        title:"Location",
         placeholder:"California, USA",
         required:false,
         name:'location'
    }
    ,
    {
        title:"Degree",
        recommended:true,
         placeholder:"Ex: Bachelors of engineering",
         required:false,
         name:'degree'
    }
    , 
    {
      title:"Start date",
      recommended:true,
      required:false,
      size:'half',
      name:'startDate'
    },
    
    {
      title:"End date",
      placeholder:"present",
      recommended:true,
      required:false,
      size:'half',
      name:'endDate'
    },
    
    {
      title:"Description",
      type:'textarea',
      name:'description'

    }
],
    Experience:[
    {
        title:"Company",
        recommended:false,
        placeholder:"",
        required:true,
        name:"company"
    }
    ,

    {
        title:"Location",
         placeholder:"California, USA",
         required:false,
         name:'location'
    }
    ,
    {
        title:"Position title",
        recommended:true,
         placeholder:"Ex: Bachelors of engineering",
         required:false,
         name:'positionTitle'
    }
    , 
    {
      title:"Start date",
      recommended:true,
      required:false,
      size:'half',
      name:'startDate'
    },
    
    {
      title:"End date",
      placeholder:"present",
      recommended:true,
      required:false,
      size:'half',
      name:'endDate'
    },
    
    {
      title:"Description",
      type:'textarea',
      name:'description'

    }


]
}
export default data;