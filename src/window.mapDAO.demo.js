
window.mapDAO = {
    MapData:[
		{
		name: '丽江古城',
		lat: "26.8667278289795",
		lon: "100.232048034668",
		url: '/you/sight/lijiang32/3056.html'
		},	
		{
		name: '束河古镇',
		lat: "26.9150791168213",
		lon: "100.207046508789",
		url: '/you/sight/lijiang32/17963.html'
		},
		{
		name: '玉龙雪山',
		lat: "27.0972347259521",
		lon: "100.261207580566",
		url: '/you/sight/lijiang32/3049.html'
		},	
		{
		name: '云杉坪',
		lat: "27.1147365570068",
		lon: "100.218940734863",
		url: '/you/sight/lijiang32/12467.html'
		},	
		{
		name: '虎跳峡',
		lat: "27.1829528808594",
		lon: "100.052688598633",
		url: '/you/sight/lijiang32/3055.html'
		},
		{
		name: '黎明',
		lat: "27.0314121246338",
		lon: "99.6862716674805",
		url: '/you/sight/lijiang32/138181.html'
		},
		{
		name: '拉市海',
		lat: "26.8623542785645",
		lon: "100.146110534668",
		url: '/you/sight/lijiang32/19738.html'
		}
	],
    onMapLoaded: function() { //需要，地图load成功后js回调
	    // 添加marker
	    addMarker();
        //以第一个位置为中心
		setCurrentMarker(0);
    },
    onMapLoadFailed: function() { //需要，地图load失败后js回调
    },

    getDataSize: function() { //需要，当native发起调用js drawMarker方法时，js通过这个函数得到需要draw的总数
	    return this.MapData.length;
    },

    getItemName: function( position) { //不需要
	   if(this.MapData[position]){
	     return this.MapData[position].name;
	   }
    },

    getItemLat: function( position) { //需要，js循环draw marker时，根据index取当前marker的经纬度
	   if(this.MapData[position]){
	     return this.MapData[position].lat;
	   }
    },

    getItemLon: function( position) { //需要，js循环draw marker时，根据index取当前marker的经纬度
	   if(this.MapData[position]){
	     return this.MapData[position].lon;
	   }
    },

    getMarkerIcon: function( status) { //需要，修改参数，js循环draw marker时，根据当前状态取marker icon路径（红，紫，橙等icon）
 
        if (status == 1)
           return icon.green; //'绿色'; //（表示当前点还未经过）
		else if (status==2)
          return icon.purple; // '紫色';//（表示当前点是正在看的）
		else if (status == 3)
          return icon.orange; //'橙色' // (表示当前点是已经看过）
    },

    onMarkerClicked: function( index) { //需要,js有点击事件时，把被点击的marker变为紫色，index之前的都变为橙色，之后的变为绿色，并通过这个函数通知native
    },

    onInfoWindowClicked: function( index) { //不需要
    },

    onStarMarkerClicked: function() { //不需要
    },

    searchOnScreenMapBy: function( latitude,  longitude,  radius) { //不需要
    },

    onMapCenterChanged: function( latitude,  longitude) { //不需要
    },

    onMapZoomChanged: function( newZoomLevel) { //不需要
    }
	
	
}