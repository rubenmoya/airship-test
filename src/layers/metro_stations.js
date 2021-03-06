export default {
  name: '🚉 Metro Stations',

  visible: true,

  style: `
    #layer {
      marker-width: 8;
      marker-fill: #FFFFFF;
      marker-line-width: 2;
      marker-line-color: ramp(
        [line],
        (#30a3dc,#cd031d,#ffe114,#944248,#96bf0d,#a0a5a7,#faa64a,#f27ca2,#a93094,#084594,#008b43,#a49a00,#00aa66,#0e4a97,#0066ff,#892ca0,#ff0000),
        ("L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10", "L11", "L12", "L14", "R", "ML1", "ML2", "ML3"), "="
      );
      marker-allow-overlap: true;
    }
  `,

  source: `
    SELECT
      cartodb_id,
      the_geom,
      the_geom_webmercator,
      line
    FROM
      linea1_geom_paradas_lite
  `,

  // style: `
  //   #layer {
  //     polygon-opacity: 0.2;
  //     polygon-fill: #56C58C;
  //   }
  // `,
  //
  // source: `
  //   WITH metro_areas as (
  //     SELECT cartodb_id, ST_Buffer(the_geom::geography, 500)::geometry as the_geom FROM linea1_geom_paradas_lite
  //   )
  //
  //   SELECT
  //     metro_areas.cartodb_id,
  //     metro_areas.the_geom,
  //     ST_Transform(metro_areas.the_geom, 3857) as the_geom_webmercator
  //   FROM metro_areas
  // `,

  options: {
  },
};
