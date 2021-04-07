import React,{useEffect,useState,forwardRef,useCallback,useRef} from 'react'
import MaterialTable,{MTableToolbar} from 'material-table'
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import WarningIcon from '@material-ui/icons/Warning';
import StopIcon from '@material-ui/icons/Stop';
import { Typography,Grid, Button,Menu,MenuItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVertOutlined';
import './Table.css'

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };





const Table = () => {
    const dat=[
      {
        status: "warning",
        name: "Simulator 1",
        deviceType: "View Sense 1",
        serial: "7a:f1:a4:f7:60:4a",
        deviceId: "f8b1d932ce6b",
        floor: "Floor 4",
        space: "Space 62377",
        commissioned: false
      },
      {
        status: "connected",
        name: "Simulator 2",
        deviceType: "View Sense 2",
        serial: "e0:bc:da:6b:0c:d7",
        deviceId: "567ad0225d67",
        floor: "Floor 9",
        space: "Space 59275",
        commissioned: true
      },
      {
        status: "warning",
        name: "Simulator 3",
        deviceType: "View Sense 3",
        serial: "93:cb:8a:8c:19:d1",
        deviceId: "b8aebe4b0791",
        floor: "Floor 5",
        space: "Space 74382",
        commissioned: true
      },
      {
        status: "warning",
        name: "Simulator 4",
        deviceType: "View Sense 4",
        serial: "be:ce:72:3b:69:05",
        deviceId: "9d6854ad8965",
        floor: "Floor 2",
        space: "Space 34018",
        commissioned: true
      },
      {
        status: "disconnected",
        name: "Simulator 5",
        deviceType: "View Sense 5",
        serial: "10:34:ae:2f:ba:3b",
        deviceId: "b9ccf6c37d4a",
        floor: "Floor 9",
        space: "Space 45765",
        commissioned: false
      },
      {
        status: "connected",
        name: "Simulator 6",
        deviceType: "View Sense 6",
        serial: "0c:16:a0:52:4c:0e",
        deviceId: "1fa385c5c94e",
        floor: "Floor 0",
        space: "Space 17103",
        commissioned: true
      },
      {
        status: "disconnected",
        name: "Simulator 7",
        deviceType: "View Sense 7",
        serial: "54:f5:69:a8:e0:cc",
        deviceId: "a4cec536d30f",
        floor: "Floor 6",
        space: "Space 20580",
        commissioned: true
      },
      {
        status: "connected",
        name: "Simulator 8",
        deviceType: "View Sense 8",
        serial: "2f:5c:20:c5:f0:01",
        deviceId: "ae40132e5db1",
        floor: "Floor 3",
        space: "Space 88674",
        commissioned: true
      },
      {
        status: "disconnected",
        name: "Simulator 9",
        deviceType: "View Sense 9",
        serial: "e2:d7:ae:09:a5:f0",
        deviceId: "a877d5077254",
        floor: "Floor 2",
        space: "Space 65136",
        commissioned: true
      },
      {
        status: "connected",
        name: "Simulator 10",
        deviceType: "View Sense 10",
        serial: "03:dd:11:90:90:07",
        deviceId: "ae50a358a775",
        floor: "Floor 6",
        space: "Space 44929",
        commissioned: false
      },
      {
        status: "connected",
        name: "Simulator 11",
        deviceType: "View Sense 11",
        serial: "2a:3b:3d:98:f6:5d",
        deviceId: "a61933f78b1d",
        floor: "Floor 2",
        space: "Space 86432",
        commissioned: true
      },
      {
        status: "connected",
        name: "Simulator 12",
        deviceType: "View Sense 12",
        serial: "a2:6a:5f:90:54:95",
        deviceId: "87a9aaeb4279",
        floor: "Floor 9",
        space: "Space 53483",
        commissioned: true
      },
      {
        status: "warning",
        name: "Simulator 13",
        deviceType: "View Sense 13",
        serial: "d9:f4:a1:21:65:dc",
        deviceId: "440905c58cd3",
        floor: "Floor 6",
        space: "Space 82814",
        commissioned: false
      },
      {
        status: "disconnected",
        name: "Simulator 14",
        deviceType: "View Sense 14",
        serial: "a4:94:95:ef:c3:4f",
        deviceId: "193d097e2cd4",
        floor: "Floor 6",
        space: "Space 16930",
        commissioned: true
      },
      {
        status: "connected",
        name: "Simulator 15",
        deviceType: "View Sense 15",
        serial: "22:c5:82:37:d1:9b",
        deviceId: "34929bdccdd7",
        floor: "Floor 9",
        space: "Space 84811",
        commissioned: false
      },
      {
        status: "warning",
        name: "Simulator 16",
        deviceType: "View Sense 16",
        serial: "5e:da:aa:29:cc:b1",
        deviceId: "0b134ef6263f",
        floor: "Floor 5",
        space: "Space 77151",
        commissioned: true
      },
      {
        status: "connected",
        name: "Simulator 17",
        deviceType: "View Sense 17",
        serial: "c3:cb:92:d7:de:5a",
        deviceId: "42405952ce70",
        floor: "Floor 8",
        space: "Space 38734",
        commissioned: false
      },
      {
        status: "disconnected",
        name: "Simulator 18",
        deviceType: "View Sense 18",
        serial: "21:50:4a:a4:6c:52",
        deviceId: "cbcef105df07",
        floor: "Floor 00",
        space: "Space 74137",
        commissioned: false
      },
      {
        status: "connected",
        name: "Simulator 19",
        deviceType: "View Sense 19",
        serial: "89:d2:9a:db:16:47",
        deviceId: "cf5157fe42b2",
        floor: "Floor 8",
        space: "Space 96955",
        commissioned: false
      },
      {
        status: "connected",
        name: "Simulator 20",
        deviceType: "View Sense 20",
        serial: "30:f4:2c:e5:5d:1e",
        deviceId: "b7dabd10df93",
        floor: "Floor 2",
        space: "Space 31112",
        commissioned: true
      },
      {
        status: "disconnected",
        name: "Simulator 21",
        deviceType: "View Sense 21",
        serial: "01:b7:c8:2e:95:48",
        deviceId: "0d8fe3aa0672",
        floor: "Floor 1",
        space: "Space 07463",
        commissioned: false
      },
      {
        status: "disconnected",
        name: "Simulator 22",
        deviceType: "View Sense 22",
        serial: "71:5c:1c:99:cd:e4",
        deviceId: "22cd74d4f3a6",
        floor: "Floor 1",
        space: "Space 28162",
        commissioned: true
      },
      {
        status: "connected",
        name: "Simulator 23",
        deviceType: "View Sense 23",
        serial: "12:d2:66:2d:81:dd",
        deviceId: "ad4b7ae11f13",
        floor: "Floor 8",
        space: "Space 01844",
        commissioned: false
      },
      {
        status: "connected",
        name: "Simulator 24",
        deviceType: "View Sense 24",
        serial: "87:48:0e:f6:e5:7b",
        deviceId: "63498306f7aa",
        floor: "Floor 3",
        space: "Space 03604",
        commissioned: false
      },
      {
        status: "warning",
        name: "Simulator 25",
        deviceType: "View Sense 25",
        serial: "05:4f:01:3d:ec:48",
        deviceId: "f92c6685ef88",
        floor: "Floor 4",
        space: "Space 76521",
        commissioned: false
      },
      {
        status: "disconnected",
        name: "Simulator 26",
        deviceType: "View Sense 26",
        serial: "c3:34:70:ec:4e:48",
        deviceId: "35fc3fb046bd",
        floor: "Floor 4",
        space: "Space 45822",
        commissioned: false
      },
      {
        status: "warning",
        name: "Simulator 27",
        deviceType: "View Sense 27",
        serial: "08:ea:2e:81:c2:d2",
        deviceId: "0c02035bdc14",
        floor: "Floor 8",
        space: "Space 94220",
        commissioned: true
      },
      {
        status: "disconnected",
        name: "Simulator 28",
        deviceType: "View Sense 28",
        serial: "dc:07:6f:fb:49:38",
        deviceId: "54bab8a61f47",
        floor: "Floor 0",
        space: "Space 07381",
        commissioned: false
      },
      {
        status: "connected",
        name: "Simulator 29",
        deviceType: "View Sense 29",
        serial: "09:df:3b:03:04:64",
        deviceId: "ac413a542b19",
        floor: "Floor 0",
        space: "Space 23986",
        commissioned: true
      },
      {
        status: "connected",
        name: "Simulator 30",
        deviceType: "View Sense 30",
        serial: "3b:a3:44:e5:27:0b",
        deviceId: "1f2b11075a3c",
        floor: "Floor 9",
        space: "Space 57803",
        commissioned: true
      },
      {
        status: "disconnected",
        name: "Simulator 31",
        deviceType: "View Sense 31",
        serial: "f9:4d:ac:bf:f0:4b",
        deviceId: "57d8f1c8a5e7",
        floor: "Floor 7",
        space: "Space 75739",
        commissioned: true
      },
      {
        status: "warning",
        name: "Simulator 32",
        deviceType: "View Sense 32",
        serial: "99:02:24:9d:e4:ba",
        deviceId: "3cfa32420444",
        floor: "Floor 1",
        space: "Space 50172",
        commissioned: false
      },
      {
        status: "disconnected",
        name: "Simulator 33",
        deviceType: "View Sense 33",
        serial: "48:8b:0e:a6:98:ea",
        deviceId: "37f239672e85",
        floor: "Floor 2",
        space: "Space 57073",
        commissioned: false
      },
      {
        status: "disconnected",
        name: "Simulator 34",
        deviceType: "View Sense 34",
        serial: "5d:4e:2e:63:7d:e6",
        deviceId: "6eb2becb3113",
        floor: "Floor 2",
        space: "Space 24712",
        commissioned: false
      },
      {
        status: "warning",
        name: "Simulator 35",
        deviceType: "View Sense 35",
        serial: "5e:3f:b1:9e:34:a9",
        deviceId: "4ad3061f003d",
        floor: "Floor 9",
        space: "Space 12061",
        commissioned: false
      },
      {
        status: "warning",
        name: "Simulator 36",
        deviceType: "View Sense 36",
        serial: "38:c3:40:c6:79:3b",
        deviceId: "f7a2ea899ea9",
        floor: "Floor 5",
        space: "Space 89078",
        commissioned: false
      },
      {
        status: "connected",
        name: "Simulator 37",
        deviceType: "View Sense 37",
        serial: "40:79:e4:07:00:0e",
        deviceId: "38357436654d",
        floor: "Floor 3",
        space: "Space 31429",
        commissioned: true
      },
      {
        status: "connected",
        name: "Simulator 38",
        deviceType: "View Sense 38",
        serial: "dd:ca:9e:49:cb:f5",
        deviceId: "9d1113796551",
        floor: "Floor 4",
        space: "Space 03707",
        commissioned: false
      },
      {
        status: "connected",
        name: "Simulator 39",
        deviceType: "View Sense 39",
        serial: "5b:e2:33:54:9e:56",
        deviceId: "ba580ca107fc",
        floor: "Floor 8",
        space: "Space 44385",
        commissioned: false
      },
      {
        status: "warning",
        name: "Simulator 40",
        deviceType: "View Sense 40",
        serial: "15:9e:e0:14:bf:49",
        deviceId: "4f7f691f7f52",
        floor: "Floor 5",
        space: "Space 54178",
        commissioned: false
      },
      {
        status: "connected",
        name: "Simulator 41",
        deviceType: "View Sense 41",
        serial: "31:51:d8:7c:2f:c0",
        deviceId: "df9c4317fe1d",
        floor: "Floor 5",
        space: "Space 78488",
        commissioned: true
      },
      {
        status: "warning",
        name: "Simulator 42",
        deviceType: "View Sense 42",
        serial: "43:b2:d5:75:b0:53",
        deviceId: "73ff0089c243",
        floor: "Floor 9",
        space: "Space 65133",
        commissioned: false
      },
      {
        status: "disconnected",
        name: "Simulator 43",
        deviceType: "View Sense 43",
        serial: "ec:4a:f1:4f:e0:f2",
        deviceId: "8c257c992164",
        floor: "Floor 4",
        space: "Space 46923",
        commissioned: true
      },
      {
        status: "warning",
        name: "Simulator 44",
        deviceType: "View Sense 44",
        serial: "fd:00:57:4d:57:c1",
        deviceId: "59d961ec1897",
        floor: "Floor 4",
        space: "Space 25212",
        commissioned: false
      },
      {
        status: "connected",
        name: "Simulator 45",
        deviceType: "View Sense 45",
        serial: "6c:9f:81:94:88:0e",
        deviceId: "31ad437ce470",
        floor: "Floor 0",
        space: "Space 43564",
        commissioned: false
      },
      {
        status: "warning",
        name: "Simulator 46",
        deviceType: "View Sense 46",
        serial: "00:0a:e9:02:06:88",
        deviceId: "5b415a688cd8",
        floor: "Floor 6",
        space: "Space 51738",
        commissioned: false
      },
      {
        status: "warning",
        name: "Simulator 47",
        deviceType: "View Sense 47",
        serial: "19:a2:94:b7:cc:ee",
        deviceId: "d2648887fc2b",
        floor: "Floor 8",
        space: "Space 35086",
        commissioned: false
      },
      {
        status: "warning",
        name: "Simulator 48",
        deviceType: "View Sense 48",
        serial: "73:02:76:20:62:0a",
        deviceId: "fc9d92cf8641",
        floor: "Floor 7",
        space: "Space 12864",
        commissioned: true
      },
      {
        status: "connected",
        name: "Simulator 49",
        deviceType: "View Sense 49",
        serial: "f9:15:ea:cd:7f:d9",
        deviceId: "84290ca2c74e",
        floor: "Floor 1",
        space: "Space 51132",
        commissioned: false
      },
      {
        status: "connected",
        name: "Simulator 50",
        deviceType: "View Sense 50",
        serial: "fe:c8:dd:0d:d6:e3",
        deviceId: "87b3643d98d7",
        floor: "Floor 6",
        space: "Space 19939",
        commissioned: false
      },
      {
        status: "connected",
        name: "Simulator 51",
        deviceType: "View Sense 51",
        serial: "82:61:59:d7:b1:1c",
        deviceId: "7c2c0e78b1ae",
        floor: "Floor 9",
        space: "Space 24120",
        commissioned: true
      },
      {
        status: "disconnected",
        name: "Simulator 52",
        deviceType: "View Sense 52",
        serial: "27:46:83:91:81:91",
        deviceId: "35c29e91f5a2",
        floor: "Floor 3",
        space: "Space 95632",
        commissioned: true
      },
      {
        status: "connected",
        name: "Simulator 53",
        deviceType: "View Sense 53",
        serial: "96:81:4e:fa:9d:f6",
        deviceId: "58a1e569a021",
        floor: "Floor 4",
        space: "Space 59571",
        commissioned: true
      },
      {
        status: "connected",
        name: "Simulator 54",
        deviceType: "View Sense 54",
        serial: "cf:fa:59:eb:e9:08",
        deviceId: "3a31390a0475",
        floor: "Floor 4",
        space: "Space 53767",
        commissioned: false
      }
      
     
      
    ]
    
        const pat=dat.map(dati=>{return{...dati,space:dati.space.substring(7,12)}})
    const [data,setData]=useState(pat)
    const [size,setSize]=useState(10)
    const [search,setSearch]=useState(false)
    const [page,setPage]=useState(0)
    const [anchorEl, setAnchorEl] = useState(null);
    const [files,setFiles] = useState('');
  
    const isMounted = useRef(false);

    const getData=useCallback(()=>{
      fetch(files
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setData(myJson)
        
        });
    },[files])
const handleChange = e => {
  
  const file=e.target.files[0];
  const link=URL.createObjectURL(file);
  setFiles(link)
  handleClose()
};
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(()=>{
    if (isMounted.current) {
      getData()
    } else {
      isMounted.current = true;
    }
  },[files,getData])
  
 
    const columns=[
        {title:<FiberManualRecordIcon fontSize='small' color='action' />, field:'status',lookup:{connected:<FiberManualRecordIcon fontSize="small" style={{color:'green'}}/>,warning:<WarningIcon style={{color:'yellow'}} fontSize="small"/>,disconnected:<StopIcon  fontSize="small" style={{color:'red'}}/>}},
        {title:'Device Name',field:'name'},
        {title:'Device Type', field:'deviceType'},
        {title:'Device Id',field:'deviceId'},
        {title:'Serial Number', field:'serial'},
        {title:'Floor', field:'floor'},
        {title:'Space', field:'space'},
        {title:'Commissioned', field:'commissioned',lookup:{true:<CheckCircleIcon color='inherit' fontSize='small' style={{color:'green'}}   />,false:<ErrorOutlineIcon fontSize='small' color='error'
        />}},

    ]
    
    return (
        <div style={{marginTop:60}}>
          <div style={{display:"flex",flexDirection:'row',justifyContent:'center',backgroundColor:'#e7eff3',height:30,paddingTop:10,paddingRight:60,position:'static'}}>
           <Typography style={{paddingRight:40,textDecoration:'underline',textDecorationColor:'red'}}>Building</Typography>
           <Typography style={{paddingRight:40}}> Active</Typography>
           <Typography style={{paddingRight:40}}> Settings</Typography>
          </div>
        <Typography style={{marginLeft:70,marginTop:36,marginBottom:36,textAlign:'left',fontSize:30}}>Device Status</Typography>
        <div  className="material" >
            <MaterialTable
          
          
              
              style={{width:"90%",margin:'auto',maxHeight:1500,minHeight:660}}
              onChangeRowsPerPage={(pageSize)=>{setSize(pageSize)}}
              onChangePage={(page,pageSize)=>
              {  setPage(page)
                setSize(pageSize)
              }
              }
              data={data}
              columns={columns}
            icons={tableIcons}
            options={{
              emptyRowsWhenPaging:false,
              exportAllData:true,
               thirdSortClick:true,
               sorting:true,
                headerStyle:{
                  backgroundColor:'#e7eff3',
                  fontWeight:'bold',
                  fontSize:16
                },
                exportButton:{
                  csv:true,
                  pdf:false
                },
                initialPage:page,
                pageSize:size,
                paging:true,
                paginationType:'normal',  
                 paginationPosition:'bottom',
                 searchFieldVariant:'standard',
                 search:search,
                pageSizeOptions:[10,15,20]
              
            }}
            
            components={{
              

              Toolbar: props => {
                // Make a copy of props so we can hide the default title and show our own
                // This let's us use our own Title while keeping the search
                const propsCopy = { ...props };
                // Hide default title
                propsCopy.showTitle = false;
              

              
                return (
                  <div style={{border: "1px solid rgba(224, 224, 224, 1)",backgroundColor:'#fefffe',height:60}}>
                  <Grid container  direction="row">
                    <Grid item xs={3} md={2} lg={2}   style={{paddingRight:92}} >
                      <h3>80 Devices</h3>
                    </Grid>
                    <Grid container  xs={9} md={10} lg={10} justify='flex-end' direction='row'>
                      {!search && <IconButton onClick={()=>{setSearch(!search)}}>
                    <SearchIcon   color='inherit' fontSize='inherit' />
                    </IconButton>}
                    {search && <Button onClick={()=>{setSearch(!search)}}>Close</Button>}
                    <MTableToolbar {...propsCopy}/>
                    <IconButton
                       aria-label="more"
                     aria-controls="long-menu"
                         aria-haspopup="true"
                         onClick={handleClick}
                     >
                     <MoreVertIcon />
                   </IconButton>
                   <Menu
                   id="long-menu"
         anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        style={{
        marginTop:240,
        marginLeft:1250,
        width:180

        }}
      >  
       <MenuItem  >  <Button
  variant='text'
  component="label"
>
  Upload Json File
  <input
    type="file"
    hidden
    onChange={handleChange}
  />
</Button>
    
</MenuItem>
         
         
      </Menu>                
                    </Grid>
                  </Grid>
                  </div>
                );
              }
            }}
           />
        </div>
        </div>
    )
}

  

  
export default Table
