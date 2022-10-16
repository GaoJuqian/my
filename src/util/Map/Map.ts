import * as ol from "ol";
import * as ol_control from "ol/control";
import * as ol_coordinate from "ol/coordinate";
import * as ol_layer from "ol/layer";
import * as ol_source from "ol/source";
import * as ol_proj from "ol/proj";

import * as ol_geom from "ol/geom";
import * as ol_style from "ol/style";

interface IOptions {
    el: HTMLElement | string;
}

export default class MapUtil {
    /**
     * 地图实例
     */
    baseMap;
    /**
     * 视图
     */
    view;
    /**
     * 地图层
     */
    baseLayer;

    /**
     *  移动 point 矢量层
     */
    movePointVectorLayer;

    /**
     *
     * @param options IOptions
     */
    constructor(options: IOptions) {
        /**
         * baseMap 控制器
         */
        const controls = ol_control
            .defaults({
                attribution: false,
            })
            .extend([
                new ol_control.MousePosition({
                    coordinateFormat: ol_coordinate.createStringXY(4),
                }),
            ]);

        this.view = new ol.View({
            center: [0, 0],
            zoom: 0,
        });

        this.baseLayer = new ol_layer.Tile({
            source: new ol_source.OSM(),
        });

        this.movePointVectorLayer = new ol_layer.Vector({
            source: new ol_source.Vector(),
        });

        this.baseMap = new ol.Map({
            target: options.el,
            layers: [this.baseLayer, this.movePointVectorLayer],
            controls,
            view: this.view,
        });
    }

    addMovePoint({ icon }: { icon: any }) {
        const mpvl_source = this.movePointVectorLayer.getSource();
        const geom = new ol_geom.Point([1, 1]);
        const mpvl_f = new ol.Feature(geom);

        function createStyle(src?: string, img?: any) {
            return new ol_style.Style({
                image: new ol_style.Icon({
                    anchor: [0.5, 0.96],
                    crossOrigin: "anonymous",
                    src: src,
                    img: img,
                    imgSize: img ? [img.width, img.height] : undefined,
                }),
            });
        }

        mpvl_f.setStyle(createStyle(icon));
        mpvl_source?.addFeature(mpvl_f);
    }
}
