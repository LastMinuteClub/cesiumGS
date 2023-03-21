define(['./defaultValue-bd2617a2', './EllipsoidOutlineGeometry-6a1b6f33', './Transforms-2aac19b6', './Matrix3-c8b7aa00', './Check-751fa3ec', './Math-811d322a', './Matrix2-7c8a62ee', './RuntimeError-8989bd8f', './combine-31ab2205', './ComponentDatatype-41984f3f', './WebGLConstants-41128b3b', './GeometryAttribute-bc2ee6bb', './GeometryAttributes-38edf78a', './GeometryOffsetAttribute-8caabdda', './IndexDatatype-98f68afb'], (function (defaultValue, EllipsoidOutlineGeometry, Transforms, Matrix3, Check, Math, Matrix2, RuntimeError, combine, ComponentDatatype, WebGLConstants, GeometryAttribute, GeometryAttributes, GeometryOffsetAttribute, IndexDatatype) { 'use strict';

  function createEllipsoidOutlineGeometry(ellipsoidGeometry, offset) {
    if (defaultValue.defined(ellipsoidGeometry.buffer)) {
      ellipsoidGeometry = EllipsoidOutlineGeometry.EllipsoidOutlineGeometry.unpack(
        ellipsoidGeometry,
        offset
      );
    }
    return EllipsoidOutlineGeometry.EllipsoidOutlineGeometry.createGeometry(ellipsoidGeometry);
  }

  return createEllipsoidOutlineGeometry;

}));
