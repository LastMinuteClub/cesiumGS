define(['./defaultValue-bd2617a2', './FrustumGeometry-d00244a0', './Transforms-2aac19b6', './Matrix3-c8b7aa00', './Check-751fa3ec', './Math-811d322a', './Matrix2-7c8a62ee', './RuntimeError-8989bd8f', './combine-31ab2205', './ComponentDatatype-41984f3f', './WebGLConstants-41128b3b', './GeometryAttribute-bc2ee6bb', './GeometryAttributes-38edf78a', './Plane-b1c5796b', './VertexFormat-c9a4a9b8'], (function (defaultValue, FrustumGeometry, Transforms, Matrix3, Check, Math, Matrix2, RuntimeError, combine, ComponentDatatype, WebGLConstants, GeometryAttribute, GeometryAttributes, Plane, VertexFormat) { 'use strict';

  function createFrustumGeometry(frustumGeometry, offset) {
    if (defaultValue.defined(offset)) {
      frustumGeometry = FrustumGeometry.FrustumGeometry.unpack(frustumGeometry, offset);
    }
    return FrustumGeometry.FrustumGeometry.createGeometry(frustumGeometry);
  }

  return createFrustumGeometry;

}));
