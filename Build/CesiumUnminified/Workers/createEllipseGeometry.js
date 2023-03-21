define(['./Matrix3-c8b7aa00', './defaultValue-bd2617a2', './EllipseGeometry-0cb6b616', './Check-751fa3ec', './Math-811d322a', './Transforms-2aac19b6', './Matrix2-7c8a62ee', './RuntimeError-8989bd8f', './combine-31ab2205', './ComponentDatatype-41984f3f', './WebGLConstants-41128b3b', './EllipseGeometryLibrary-f9948790', './GeometryAttribute-bc2ee6bb', './GeometryAttributes-38edf78a', './GeometryInstance-4ac2f186', './GeometryOffsetAttribute-8caabdda', './GeometryPipeline-67b7ca3b', './AttributeCompression-912168aa', './EncodedCartesian3-4caecb11', './IndexDatatype-98f68afb', './IntersectionTests-9fbe3546', './Plane-b1c5796b', './VertexFormat-c9a4a9b8'], (function (Matrix3, defaultValue, EllipseGeometry, Check, Math, Transforms, Matrix2, RuntimeError, combine, ComponentDatatype, WebGLConstants, EllipseGeometryLibrary, GeometryAttribute, GeometryAttributes, GeometryInstance, GeometryOffsetAttribute, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, VertexFormat) { 'use strict';

  function createEllipseGeometry(ellipseGeometry, offset) {
    if (defaultValue.defined(offset)) {
      ellipseGeometry = EllipseGeometry.EllipseGeometry.unpack(ellipseGeometry, offset);
    }
    ellipseGeometry._center = Matrix3.Cartesian3.clone(ellipseGeometry._center);
    ellipseGeometry._ellipsoid = Matrix3.Ellipsoid.clone(ellipseGeometry._ellipsoid);
    return EllipseGeometry.EllipseGeometry.createGeometry(ellipseGeometry);
  }

  return createEllipseGeometry;

}));
