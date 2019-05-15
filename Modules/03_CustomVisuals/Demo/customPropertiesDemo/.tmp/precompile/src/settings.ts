module powerbi.extensibility.visual.helloD3BC56C2A4E3C6403FBF5158A155A73EF7  {

  import DataViewObjectsParser = powerbi.extensibility.utils.dataview.DataViewObjectsParser;

  export class VisualSettings extends DataViewObjectsParser {
    public myVisualProperties: MyVisualProperties = new MyVisualProperties();
  }

  export class MyVisualProperties {
    public message: string = "Hello D3";
    public backgroundColor: string = "#f2c80f";
  }

}
